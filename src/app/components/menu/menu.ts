import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { State } from '../../shared/services/state';


@Component({
  selector: 'app-menu',
  imports: [RouterLink, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="navigation">
    <!-- <button matButton="filled" [routerLink]="'/country'">Country</button> -->
    <button matButton="filled" [routerLink]="'/master'">Mastermind</button>
    <button matButton="filled" [routerLink]="'/world'">World</button>
    <!-- <button matButton="filled" [routerLink]="'/styles'">Country lists</button> -->
  </div>

  `,
  styleUrl: './menu.scss',
})
export class Menu {
  protected destroyRef = inject(DestroyRef); // this needs to be declared
  protected state = inject(State)

  constructor() {
    sessionStorage.setItem('canView','true')
    this.state.showMenuButton.set(false) // hides the app comp toolbar
    
    this.destroyRef.onDestroy(() => // register a destroy callback
    {
      this.state.showMenuButton.set(true) // shows app toolbar when menu closes
    }

    );
  }

}
