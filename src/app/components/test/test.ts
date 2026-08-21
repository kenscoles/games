import { Component, effect, inject, linkedSignal, signal, ChangeDetectionStrategy } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Country1 } from '../../types';
import { debouncedSignal } from '../../shared/services/util';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { Resources } from '../../shared/services/resources';

interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  region: string;
  subRegion: string;
  subRegionCode: string;

}


@Component({
  selector: 'app-test',
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
     FormsModule, MatInputModule, MatLabel],
  templateUrl: './test.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './test.scss'
})
export class Test {

  res = inject(Resources)

  showList = signal(true) // show the filter input
  myCountries = httpResource<Country[]>(() => 'assets/myCountries.json')
  mySelection = signal(<string>("GBR"))
  langs:string[] | undefined = []
  borders:string[] | undefined = []
  private baseUrl = 'https://countries.dev/alpha/';
  private suffix = '?fields=name%2Ccapital%2Cflag&full=true'
  mySig = signal<Country[]>([]);
  searchTerm = signal('');
  debounceSearchValue = debouncedSignal(this.searchTerm, 2000); // default is 500
  countryResource = httpResource<Country1>(() =>
  ({
    url: `${this.baseUrl}${this.mySelection()}${this.suffix}`,


  }));
  filtered = linkedSignal({ // filter by search data
    source: this.mySig,
    computation: () => {
      return this.mySig()
        .filter((item: {name:string; alpha3: string; region:string}) =>
          item.name.toLowerCase().includes(this.debounceSearchValue().toLowerCase())
          || item.alpha3.toLowerCase() == this.debounceSearchValue().toLowerCase()
          //|| item.region.toLowerCase() == this.debounceSearchValue().toLowerCase()
        )
    }
  })
t = effect(() => {
    if (this.countryResource.hasValue()) {
      this.adapt()
    }
  })
 k = effect(() => {
    if (this.myCountries.hasValue()) {
      this.mySig.set(this.myCountries.value())
      console.log("k triggered", this.mySig()) 
    }
  })

  test() {

    console.log("data:", this.countryResource.value())
  }

  adapt() {
    
       //adapt the languages and borders data
    const names = (this.countryResource.value()?.languages)
    console.log("names" ,names)
    
    const nameArr = names?.map(item => " "+item.name);
    this.langs = nameArr;
    const borders = (this.countryResource.value()?.borders)
    console.log("borders" ,borders)
    const borderArr = borders?.map(user => " "+user);
    this.borders = borderArr;
    
    


  }
 getCountry(data: string){
   console.log("data", data)
   this.mySelection.set(data)
   this.showList.set(false)
}
showtheList(){
  this.showList.set(true)
}
}