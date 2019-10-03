import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// App modules
import { ProductsModule } from './products/products.module';

// App components
import { AppComponent } from './app.component';
import { CartComponent } from './cart/components/cart/cart.component';

// App services
import { CartService } from './cart/services/cart.service';
import { CommunicationService } from './core/services/communication.service';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [CartService, CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
