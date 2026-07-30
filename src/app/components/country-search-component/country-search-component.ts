import { Component, signal, effect, OnInit, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-country-search',
  standalone: true,
  imports: [DecimalPipe, CommonModule],
  templateUrl: './country-search-component.html',
  styleUrl: './country-search-component.scss'
})
export class CountrySearchComponent  implements OnInit {
   
  private http = inject(HttpClient);
  
   myCountry = signal<any>("")
  
    
  ngOnInit(): void {
    this.http.get<any>('assets/gb.json').subscribe({
      next: (data) => this.myCountry.set(data),
      error: (err) => console.error('Error loading JSON file', err)
    });
   }
  
}