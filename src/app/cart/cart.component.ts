import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Stamp[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cart = items;
      this.updateTotal();
    });
  }

  removeFromCart(stamp: Stamp) {
    this.cartService.removeFromCart(stamp);
  }

  updateTotal() {
    this.totalPrice = this.cart.reduce((total, item) => total + item.price, 0);
  }
}
