import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// App modules
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';

import { httpInterceptorProviders } from './core/interceptors';

// App components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    SharedModule,
    FormsModule,
    LayoutModule,
    CoreModule,
    HttpClientModule,

    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders]
})
export class AppModule { }
