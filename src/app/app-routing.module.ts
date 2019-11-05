import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core';

import { AboutComponent, PathNotFoundComponent, OrderComponent, LoginComponent } from './layout';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
