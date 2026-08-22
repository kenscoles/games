import { httpResource, HttpResourceRef } from '@angular/common/http';
import { effect, inject, Injectable, signal, Signal, Service } from '@angular/core';
import { Util } from './util';
import { myCode } from '../../country.interface';
import { countryAdapter } from '../../country.adapter';
import { State } from './state';

interface List {
  name: string;
  alpha3Code: string;
  region: string;
}

@Service()

export class Resources {

  #state = inject(State)
  #util = inject(Util)
  readonly codes = httpResource<any>(() => 'https://countries.dev/countries?fields=name%2Calpha3Code%2Cregion')
  
  result: myCode[] = []
  myRes = signal(<any>[])
  t = effect(() => {
    this.myRes.set(this.codes.value())  
    console.log("myRes ", this.myRes())
  })

  // Factory method for reactive data fetching
  createUserResource = ($countryId: Signal<any>) => httpResource<any>(() => (
    $countryId() ? `https://countries.dev/alpha/${$countryId()}?fields=name%2Ccapital%2Cflag&full=true` : undefined
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
