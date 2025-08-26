import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Util } from '../../shared/services/util';
import { State } from '../../shared/services/state';
import { Router } from '@angular/router';


@Component({
  selector: 'app-styles',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './styles.html',
  styleUrl: './styles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Styles {

  private util = inject(Util)
  router = inject(Router)
  state = inject(State)
  selection = signal("All")
  myCountryData = signal<any | undefined>('')
  countryData = signal<any | undefined>('')
  result: any[] = []
  regions: string[] = []
  codes = httpResource<any>(() => 'https://restcountries.com/v3.1/all?fields=name,cca3,capital,flags,region')
  isDataLoaded = false
myDate = Date.now()
  constructor() {

    effect(() => {
      if (this.codes.hasValue()) { // ensure that country data has been received
        if (!this.isDataLoaded) { //run ONCE ONLY to process the data and build the region dropdown select  
          this.result = (this.codes.value().map(
            (country: { cca3: string; name: { common: string }; region: string; capital: string[]; flags: any }) =>
              ({ code: country.cca3, name: country.name.common, region: country.region, capital: country.capital[0], flag: country.flags.svg })));
          this.countryData.set(this.result)
          if (this.selection() === "All") {
            this.myCountryData.set(this.countryData())
          }
          this.util.objsort(this.countryData(), "name", "asc") // sort into alpha order
          this.regions = Array.from(new Set(this.codes.value().map((obj: { region: any; }) => obj.region))) // get unique values
          this.regions.unshift("All") // add this to the beginning
          console.log("regions", this.regions)
          console.log("countryData", this.countryData())
          this.isDataLoaded = true // flag up that this has been done
        }
      }
    })
  }

  onSelected(loc: string) { // filter the data by region

    this.selection.set(loc)
    if (this.selection() === "All") {
      this.myCountryData.set(this.countryData())
    }
    else {
      this.myCountryData.set(this.countryData().filter((t: { region: string; }) => t.region == this.selection()))
    }

  }
  collectData(data:any){
console.log("Data ", data )
this.state.myCountry.set(data.code)
this.router.navigate(['country'])


  }
}

