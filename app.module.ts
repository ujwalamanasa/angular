import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';

@NgModule({
  declarations: [
    AppComponent,

    ProductlistComponent,

    ProductdescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
