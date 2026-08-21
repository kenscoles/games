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
                path: 'select', title: 'select',
                loadComponent: () => import('./components/select/select').then(c => c.Select)

            },
            {
                path: 'test1', title: 'test1',
                loadComponent: () => import('./components/test/test').then(c => c.Test)

            },
            
            {
                path: 'test2', title: 'test2',
                loadComponent: () => import('./components/test2/test2').then(c => c.Test2)

            },
            {
                path: 'test3', title: 'test2',
                loadComponent: () => import('./components/test3/test3').then(c => c.Test3)

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
