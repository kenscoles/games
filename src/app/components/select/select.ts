import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Util } from '../../shared/services/util';
import { CommonModule } from '@angular/common';


interface Country {
  Name: string;
  cca2: string;
  cca3: string;
  ccn3: number;
}


@Component({
  selector: 'app-select',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './select.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './select.scss'
})
export class Select implements OnInit {
  private http = inject(HttpClient);
  private util = inject(Util)

  countries: Country[] = [];
  mySelection = signal(<string >("GBR"))
  myCountry = signal<any>("")
  //

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
   

  //
  

  ngOnInit(): void {
    // Fetch the JSON file from the assets directory
     this.http.get<any[]>('assets/countries.json').subscribe({
      next: (data) => this.countries = data,
      error: (err) => console.error('Error loading JSON file', err)
    });

    this.countries = this.util.objsort(this.countries, "Name", "asc") // sort into alpha order)
    this.http.get<any>('assets/gb.json').subscribe({
      next: (data) => this.myCountry.set(data),
      error: (err) => console.error('Error loading JSON file', err)
    });
  }
  show(){
console.log("countries: ", this.countries)
const k = this.countryResource.value();
console.log("resource: ", k)
console.log("local resource: ", this.myCountry())

  }
}