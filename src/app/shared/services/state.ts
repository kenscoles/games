import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class State {

  constructor() { }
  showMenuButton = signal<boolean>(false) //  ie the button on app component toolbar
  myCountry = signal("GBR")
  countryData = signal<any | undefined>('')
  isTheSelectBuilt = signal<boolean>(false)
  codes = signal<any | undefined>('')
  showCountry = signal<boolean>(false)
}
