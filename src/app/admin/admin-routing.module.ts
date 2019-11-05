import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core';

import { AdminComponent } from './admin.component';
import { ProductFormComponent } from './../products/components';
import { ProductResolveGuard } from './../products/guards';
import { AdminPageComponent, ManageOrdersComponent } from './components';


const routes: Routes = [
{
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'orders', component: ManageOrdersComponent },
          { path: 'product/edit/:productID', component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          { path: 'products/add', component: ProductFormComponent },
          { path: '', component: AdminPageComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    AdminPageComponent,
    ManageOrdersComponent
  ];
}
