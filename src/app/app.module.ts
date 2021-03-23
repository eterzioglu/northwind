import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],//Dışardan aldıklarımızı buraya bizim yazdıklarımızı üste..
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
