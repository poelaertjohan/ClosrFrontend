import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SellingProductsComponent } from "./components/selling-products/selling-products.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
class AppComponent {
  title = "ClosR";
}

export { AppComponent };
