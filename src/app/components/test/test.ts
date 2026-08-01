import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

interface Item {
  id: number;
  name: string;
}


@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
   private http = inject(HttpClient);

  // 1. Fetch the JSON file and convert it directly into a Signal
  // We pass an empty array [] as the initial value to prevent runtime null errors before the file loads
 // Explicitly type both the HTTP call and provide the fallback array
// The signal will start as undefined until the JSON loads
public items = toSignal<Item[]>(
  this.http.get<Item[]>('assets/items.json')
);

  // 2. Writable signal to track the user's dropdown selection
  public selectedId = signal<string>('');

  // 3. Handle selection updates
  public onSelectionChange(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.selectedId.set(element.value);
  }
}