import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  region: string;
  subRegion: string;
  subRegionCode: string;

}

@Component({
  selector: 'app-test2',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatSelectModule, DecimalPipe],
  templateUrl: './test2.html',
  styleUrl: './test2.scss',
})
export class Test2 {
myCountries = httpResource<Country[]>(()=> 'assets/myCountries.json' )
mySelection = signal(<string >("GBR"))
private apiKey = 'rc_live_5254adb41f674417be1e83e7a9369414';
  
  // Use the core v5 base URL
  private baseUrl = 'https://api.restcountries.com/countries/v5';
  
  countryResource = httpResource<any>(() => 
    ({
    url: `${this.baseUrl}/codes.alpha_3/${this.mySelection()}`,
    headers: {
      'Authorization': `Bearer ${this.apiKey}`,
    }
  
  }));


}
