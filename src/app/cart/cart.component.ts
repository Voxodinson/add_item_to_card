import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public allCartProducts: any = [];
  public grandTotalPrices!: number;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.allCartProducts = res;
      this.grandTotalPrices = this.cartservice.getTotalPrice();
    });
  }
  removeProduct(eachCartProduct: any) {
    this.cartservice.removeCartItem(eachCartProduct);
  }
  removeAllCartProducts() {
    this.cartservice.removeAllCart();
  }
}
