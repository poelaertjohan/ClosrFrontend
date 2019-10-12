import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-selling-products",
  templateUrl: "./selling-products.component.html",
  styleUrls: ["./selling-products.component.css"]
})
export class SellingProductsComponent implements OnInit {
  private objecten = [
    {
      name: "kip",
      price: 15,
      imageSource:
        "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555930041/shape/mentalfloss/istock_000006350265-chicken_6.jpg",
      description:
        "Een kip voor een lage prijs. Er zijn er een aantal beschikbaar, ze zijn allen geboren op 12 september."
    },
    {
      name: "Tomaat",
      price: 12,
      imageSource:
        "http://www.allegrow.be/pictures/sliders/2734_detail.jpg?1549532519",
      description: "Een lekker organisch tomaatje net geoogst"
    },
    {
      name: "Eieren",
      price: 2,
      imageSource:
        "https://i.ndtvimg.com/i/2017-09/eggs-contamination_625x350_71505134587.jpg",
      description:
        "Versgelegde eieren van mijn kipjes. Mijn kippen heten Berta en Erik en leggen altijd veel te veel eieren, graag geef ik ze weg voor een klein prijsje."
    }
  ];
  constructor() {}

  get objects() {
    return this.objecten;
  }

  ngOnInit() {}
}
