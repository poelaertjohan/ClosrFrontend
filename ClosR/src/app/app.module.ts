import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SellingProductsComponent } from "./components/selling-products/selling-products.component";

const routerConfig: Routes = [
  {
    path: "products",
    component: SellingProductsComponent
  }
];
@NgModule({
  declarations: [AppComponent, SellingProductsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routerConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
