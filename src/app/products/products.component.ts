import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
// https://course-api.com/react-store-products
export class ProductsComponent implements OnInit {
  private _url =
    'https://voxodinson.github.io/Store_Data_Rest_API/productsData.json';
  public allitems: any = [];

  constructor(private _http: HttpClient, private cartservice: CartService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this._http.get(this._url).subscribe((resData: any) => {
      this.allitems = resData;

      this.allitems.forEach((i: any) => {
        Object.assign(i, { quantity: 1, total: i.price });
      });
    });
  }
  addtoCart(item: any) {
    this.cartservice.addtoCart(item);
  }
}
