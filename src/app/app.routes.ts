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
             {
                path: 'styles', title: 'styles',
                loadComponent: () => import('./test/styles/styles').then(c => c.Styles)

            },
            {
                path: 'master', title: 'master',
                loadComponent: () => import('./components/mastermind/mastermind.component').then(c => c.MastermindComponent)

            },
           
        ]
    }

]
