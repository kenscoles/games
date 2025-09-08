import { httpResource } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, effect, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { myCode } from '../../country.interface';
import { countryAdapter } from '../../country.adapter';
import { FormsModule } from '@angular/forms';
import { Util, debouncedSignal } from '../../shared/services/util';
import { State } from '../../shared/services/state';

@Component({
  selector: 'app-country',
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './country.html',
  styleUrl: './country.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Country {
  state = inject(State)
  myDate = Date.now()
  code = signal("GBR") // will be picked up from state service
  chosenCode = signal('GBR');
  debounceSearchValue = debouncedSignal(this.chosenCode, 500); // default is 500
  country = httpResource<any>(() => `https://restcountries.com/v3.1/alpha/${this.code()}`);
  codes = httpResource<any>(() => 'https://restcountries.com/v3.1/all?fields=name,cca3')
  result: myCode[] = []
  isCountryListBuilt = false;
  countryData = signal<any | undefined>('')

  private util = inject(Util)

  constructor() {
    this.chosenCode.set(this.state.myCountry()) // IS THIS RIGHT ??????
    effect(() => {
      if (this.country.hasValue() && this.codes.hasValue()) {
        //console.log("original: ", this.country.value())
        const processedData = countryAdapter(this.country.value()[0]) // process the REST api data
        this.countryData.set(processedData)
        //console.log("processed: ", processedData)

        if (!this.isCountryListBuilt) { // get data for and build select list of
          console.log("select now built") // countries and cca3 codes
          this.result = (this.codes.value().map(
            (country: { cca3: string; name: { common: string } }) =>
              ({ code: country.cca3, name: country.name.common })));
          this.util.objsort(this.result, "name", "asc") // sort into alpha order
          this.isCountryListBuilt = true
          console.log("code: ", this.result)
          console.log("codes value: ", this.codes.value())
        }
      }
    })
    effect(() => { // fires when debounceSearchValue changes
      
      this.code.set(this.debounceSearchValue())
    })
  }
  test(){
    this.chosenCode.set('FRA')
  }

}


