import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
             {
                path: '',  redirectTo: '/menu', pathMatch: 'full',
            },
           
            {
                path: 'menu', title: 'menu',
                loadComponent: () => import('./components/menu/menu').then(c => c.Menu)

            },
            {
                path: 'country', title: 'country',
                loadComponent: () => import('./components/country/country').then(c => c.Country)

            },
           
        ]
    }

]
