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
    <button matButton="elevated" [routerLink]="'/country'">Country</button>
    <button matButton="elevated" [routerLink]="'/master'">Mastermind</button>
    <button matButton="elevated" [routerLink]="'/styles'">Styles</button>
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
