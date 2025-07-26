import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard/dashboard'),
    children: [
      {
        path: 'treanding',
        loadComponent: () => import('./gifs/pages/trending/trending'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search'),
      },
      {
        path: '**',
        redirectTo: 'treanding',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
