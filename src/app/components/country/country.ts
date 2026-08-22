import { Component, effect, inject, linkedSignal, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { Resources } from '../../shared/services/resources';

@Component({
  selector: 'app-country',
  imports: [FormsModule,CommonModule, MatButtonModule, MatInputModule,
     MatLabel, MatFormFieldModule, MatSelectModule],
  templateUrl: './country.html',
  styleUrl: './country.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Country {

res = inject(Resources)

  showList = signal(true) // show the filter input
  searchTerm = signal("")
  chosen = signal("GBR")
  country = this.res.getCountry(this.chosen) // fires when chosen changes
  filtered = linkedSignal({ // filter by search data - fires when searchTerm changes
    source: this.res.myRes,
    computation: () => {
      return this.res.myRes()
        .filter((item: { name: string; alpha3Code: string; region: string }) =>
          item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
          || item.region.toLowerCase().includes(this.searchTerm().toLowerCase())
          || item.alpha3Code == this.searchTerm().toUpperCase()
        )
    }
  })
  t = effect(() => {
    if (this.country.hasValue()) {
      console.log(this.country.value())
      this.adapt()
    }
  })
  getCountry(data: string) {
    this.chosen.set(data)
    this.showList.set(false)

  }
  langs: string[] | undefined = []
  borders: string[] | undefined = []

  adapt() { // runs when country changes
    const names = (this.country.value()?.languages)
    const nameArr = names?.map((item: { name: string; }) => " " + item.name);
    this.langs = nameArr;
    const borders = (this.country.value()?.borders)
    const borderArr = borders?.map((user: string) => " " + user);
    this.borders = borderArr;
  }
  showtheList(){
  this.showList.set(true)
}
}

