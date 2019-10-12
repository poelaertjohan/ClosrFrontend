import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SellingProductsComponent } from "./components/selling-products/selling-products.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SellingProductComponent } from "./components/selling-product/selling-product.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from "./components/home/home.component";

const routerConfig: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "products",
    component: SellingProductsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SellingProductsComponent,
    SellingProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
