import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-selling-product",
  templateUrl: "./selling-product.component.html",
  styleUrls: ["./selling-product.component.css"]
})
export class SellingProductComponent implements OnInit {
  @Input() public object;
  constructor() {}

  ngOnInit() {}
}
