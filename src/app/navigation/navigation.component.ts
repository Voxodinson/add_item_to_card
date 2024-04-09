import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  public totalItems: number = 0;
  constructor(private cartservice: CartService) {}
  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.totalItems = res.length;
    });
  }
}
