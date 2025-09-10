import { httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Util } from './util';
import { myCode } from '../../country.interface';
import { countryAdapter } from '../../country.adapter';
import { State } from './state';


@Injectable({
  providedIn: 'root'
})
export class Resources {

  #state = inject(State)
  #util = inject(Util)
  readonly codes = httpResource<any>(() => 'https://restcountries.com/v3.1/all?fields=name,cca3')
  result: myCode[] = []
  // Factory method for reactive data fetching
  createUserResource = ($countryId: Signal<any>) => httpResource<any>(() => (
    $countryId() ? `https://restcountries.com/v3.1/alpha/${$countryId()}` : undefined
  ))

  getCountry = ($countryId: Signal<string>) => this.createUserResource($countryId)

  adaptData = (data: HttpResourceRef<any>) => countryAdapter(data!.value()[0])

  makeSelect = () => {
    this.result = (this.codes.value().map(
      (country: { cca3: string; name: { common: string } }) =>
        ({ code: country.cca3, name: country.name.common })));
    this.#util.objsort(this.result, "name", "asc") // sort into alpha order
    this.#state.codes.set(this.result)
    this.#state.isTheSelectBuilt.set(true)
  }
}
