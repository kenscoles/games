import { ChangeDetectionStrategy, Component, effect, inject, signal, linkedSignal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Util, debouncedSignal } from '../../shared/services/util';
import { State } from '../../shared/services/state';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Resources } from '../../shared/services/resources';
import { Country } from '../country/country';
import { httpResource } from '@angular/common/http';

interface CountryResponseV5 {
  codes: {
    alpha_3: string;
  };
}

@Component({
  selector: 'app-world',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, Country],
  templateUrl: './world.html',
  styleUrl: './world.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class World {
  #util = inject(Util)
  router = inject(Router)
  state = inject(State)
  #resourcesService = inject(Resources)
  countryData = signal<any | undefined>('')
  codes = this.#resourcesService.codes
  isDataLoaded = false
  //
  searchInput = signal('')
  debounced = debouncedSignal(this.searchInput, 1000)
  filtered = linkedSignal(() => {
    return this.countryData()
      .filter((item: { name: string; region: string }) =>
        item.name.toLowerCase().includes(this.debounced().toLowerCase()) ||
        item.region.toLowerCase().includes(this.debounced().toLowerCase())
      )
  });
   private readonly apiKey = 'rc_live_5254adb41f674417be1e83e7a9369414';

  // Defines the httpResource reactive signal fetching from v5
  readonly countries = httpResource<string>(() => ({
    url: 'https://api.restcountries.com/countries/v5?q=canada',
    headers: {
      'Authorization': `Bearer ${this.apiKey}`
    }
  }));

//     countryCodesResource = httpResource<string[]>(() => ({
//     // 2. Updated domain and path
//     url: 'https://api.restcountries.com/countries/v5',
//     // 3. Changed filter property to response_fields
//     params: { response_fields: 'codes.alpha_3' },
//     // 4. Added required v5 Authorization headers
//     headers: {
//       'Authorization': 'Bearer rc_live_5254adb41f674417be1e83e7a9369414' // Replace with your production key
//     }
//   }), {
//     // 5. Updated transformation logic to extract nested data
//     parse: (rawJson: unknown) => {
//       const countries = rawJson as CountryResponseV5[];
// console.log("ok?",rawJson)
//       const myCountries = countries.map(country => country.codes?.alpha_3).filter(Boolean);
      
//       return myCountries
//     }
//   })

  constructor() {
    
    console.log("codes:", this.codes.value())
    effect(() => {
      console.log("effect 1")
      this.state.showCountry.set(false) // make sure world component is visible
      if (this.codes.hasValue()) { // ensure that country data has been received
        if (!this.isDataLoaded) { //run ONCE ONLY to process the data and build the region dropdown select  
          const result = (this.codes.value().map(
            (country: { cca3: string; name: { common: string }; region: string; capital: string[] }) =>
              ({ code: country.cca3, name: country.name.common, region: country.region, capital: country.capital[0] })));
          this.countryData.set(result)
          console.log("countryData", this.countryData())
          this.#util.objsort(this.countryData(), "name", "asc") // sort into alpha order
          this.isDataLoaded = true // flag up that this has been done
        }
      }
    })
    effect(() => { // fires when debounced changes
      console.log("effect 2")
      this.searchInput.set(this.debounced())
    })
  } // end of constructor //

  collectData(data: any) {
    console.log("Data ", data)
    this.state.myCountry.set(data.code)
    //this.router.navigate(['country'])
    this.state.showCountry.set(true)
  }
//   test = async ()=> {
//     fetch(
//   'https://api.restcountries.com/countries/v5?q=france',
//   { headers: { 'Authorization': 'Bearer rc_live_5254adb41f674417be1e83e7a9369414' } }
// )
//   .then(function (response) { return response.json(); })
//   .then(function (data) { console.log(data); });

//   }

test = () => {
  //console.log("mydata: ", this.countryCodesResource.value())
  if (this.countries.hasValue()){
    const j = this.countries.value()
    
    console.log("j: ", j)
    
  } 
  
  // 
}
}
