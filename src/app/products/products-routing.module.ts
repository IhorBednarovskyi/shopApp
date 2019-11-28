import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsStatePreloadingGuard, ProductExistsGuard } from './guards';

import { ProductListComponent, ProductFormComponent, ProductCardComponent } from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
    canActivate: [ProductsStatePreloadingGuard]
  },
  {
    path: 'product/:productID',
    component: ProductCardComponent,
    canActivate: [ProductExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  static components = [ProductListComponent, ProductFormComponent, ProductCardComponent];
}
