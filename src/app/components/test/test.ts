import { Component, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpResource } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Country1 } from '../../types';

interface Item {
  id: number;
  name: string;
}
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
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
  private http = inject(HttpClient);
  myCountries = httpResource<Country[]>(() => 'assets/myCountries.json')
  mySelection = signal(<string>("GBR"))
  langs:string[] | undefined = []
  borders:string[] | undefined = []
  private baseUrl = 'https://countries.dev/alpha/';
  private suffix = '?fields=name%2Ccapital%2Cflag&full=true'
  countryResource = httpResource<Country1>(() =>
  ({
    url: `${this.baseUrl}${this.mySelection()}${this.suffix}`,


  }));
t = effect(() => {
    if (this.countryResource.hasValue()) {
      this.adapt()
      //console.log("t triggered")
    }
  })
  test() {

    console.log("data:", this.countryResource.value())
  }

  adapt() {
    
    //adapt the languages and borders data
    const names = (this.countryResource.value()?.languages)
    const nameArr = names?.map(item => " "+item.name);
    this.langs = nameArr;
    const borders = (this.countryResource.value()?.borders)
    const borderArr = borders?.map(user => " "+user);
    this.borders = borderArr;


  }
}