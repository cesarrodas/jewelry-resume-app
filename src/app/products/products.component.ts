import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      name: "Bracelet",
      price: "$225",
      img: "./assets/item-01.webp"
    },
    {
      name: "Twisted Metal",
      price: "$200",
      img: "./assets/item-02.webp"
    },
    {
      name: "Heart Chain",
      price: "$330",
      img: "./assets/item-03.webp"
    },
    {
      name: "Heart Pendant",
      price: "$165",
      img: "./assets/item-04.webp"
    }
  ]
}
