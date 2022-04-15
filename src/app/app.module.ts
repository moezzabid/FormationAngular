import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "../product/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacePipe} from "../shared/convert-to-space.pipe";
import {StarComponent} from "../shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import {DetailsProductComponent} from "../product/details-product/details-product.component";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "../home/welcome/welcome.component";
import {DetailProductGuard} from "../product/detail-product.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    WelcomeComponent,
    DetailsProductComponent,
    ConvertToSpacePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"/product",component:ProductListComponent},
      {path:"/product/id",component:DetailsProductComponent,canActivate:[DetailProductGuard]},
      {path:"/welcome",component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

