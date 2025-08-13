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
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/gif-history/gif-history'),
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
