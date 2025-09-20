import { Routes } from '@angular/router';
import { redirectGuard } from './shared/guards/redirect-guard';

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
                path: 'world', title: 'world',
                loadComponent: () => import('./components/world/world').then(c => c.World)

            },
             {
                path: 'styles', title: 'styles', canActivate: [redirectGuard],
                loadComponent: () => import('./test/styles/styles').then(c => c.Styles)

            },
            {
                path: 'master', title: 'master', canActivate: [redirectGuard],
                loadComponent: () => import('./components/mastermind/mastermind.component').then(c => c.MastermindComponent)

            },
           
        ]
    }

]
