import { httpResource } from '@angular/common/http';
import { Component, effect, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Resources } from '../../shared/services/resources';

interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  region: string;
  subRegion: string;
  subRegionCode: string;

}
interface List {
  name: string;
  alpha3Code: string;
  region: string;
}

@Component({
  selector: 'app-test2',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './test2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './test2.scss',
})
export class Test2 {
res = inject(Resources)  
myCountries = httpResource<Country[]>(()=> 'assets/myCountries.json' )
mySelection = signal(<string >("GBR"))
mySig = signal<List[]|undefined>([]);
data = signal<List[]|undefined>([]);
t = effect(() => {
  this.data.set(this.res.codes.value())
  console.log("REST data: ", this.data())
  console.log("Service data: ", this.res.codes.value())
}
)
  
  // Use the core v5 base URL
  private baseUrl = 'https://countries.dev/countries?fields=name%2Calpha3Code%2Cregion';
  
  countryResource = httpResource<List[]>(() => 
    ({
    url: `${this.baseUrl}`,
    
  }));

show(){
  console.log("REST data: ", this.countryResource.value())
  this.search(this.mySelection())
}
private search(value: string): void {
    
    const query = value.toLowerCase();
    this.mySig.set(this.countryResource.value()?.filter(
      (item) =>
        item.alpha3Code.toLowerCase().includes(query) ||
      item.region.toLowerCase().includes(query)
        
    ));
  
    console.log("Sig", this.mySig())
  }
getCountry(data: string){
   console.log("data", data)
   this.search(data)

}
}
