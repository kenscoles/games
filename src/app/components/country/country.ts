import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, effect, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { myCode } from '../../country.interface';
import { FormsModule } from '@angular/forms';
import { debouncedSignal } from '../../shared/services/util';
import { State } from '../../shared/services/state';
import { Resources } from '../../shared/services/resources';

@Component({
  selector: 'app-country',
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './country.html',
  styleUrl: './country.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Country {
  #state = inject(State)
  #resourcesService = inject(Resources)
  myDate = Date.now()
  code = signal("GBR") // will be picked up from state service
  chosenCode = signal('GBR');
  debounceSearchValue = debouncedSignal(this.chosenCode, 1000); // default is 500
  country = this.#resourcesService.getCountry(this.code) /////////////////// TEST ONLY ///////////////////
  result: myCode[] = []
  countryData = signal<any | undefined>('')


  constructor() {
    this.chosenCode.set(this.#state.myCountry()) // IS THIS RIGHT ??????

    effect(() => {
      if (this.country.hasValue()) {
        this.countryData.set(this.#resourcesService.adaptData(this.country))
        
        if (!this.#state.isTheSelectBuilt()) { // get data for and build select list of
          console.log("select now built") // countries and cca3 codes
          this.#resourcesService.makeSelect()
        }
       
          this.result = this.#state.codes()
       
      }
    })
    effect(() => { // fires when debounceSearchValue changes
      this.code.set(this.debounceSearchValue())
    })
  }
  test() {
    // this.chosenCode.set('FRA')
    console.log("country res", this.country.value())
  }

}


