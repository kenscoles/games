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
    <!-- <li><a mat-button [routerLink]="'/country'">Country</a></li>  -->
    <button matButton="elevated" [routerLink]="'/country'">Country</button>
  </div>
  `,
  styleUrl: './menu.scss',
})
export class Menu {
  protected destroyRef = inject(DestroyRef); // this needs to be declared
  protected state = inject(State)

  constructor() {
    this.state.showMenuButton.set(false) // hides the app comp toolbar

    this.destroyRef.onDestroy(() => // register a destroy callback
    {
      this.state.showMenuButton.set(true) // shows app comp toolbar when menu closes
    }

    );
  }

}
