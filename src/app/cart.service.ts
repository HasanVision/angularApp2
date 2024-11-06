import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Stamp {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Stamp[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(stamp: Stamp) {
    const currentCart = this.cartItems.value;
    this.cartItems.next([...currentCart, stamp]);
  }

  removeFromCart(stamp: Stamp) {
    const currentCart = this.cartItems.value.filter(item => item.id !== stamp.id);
    this.cartItems.next(currentCart);
  }

  getCartItems() {
    return this.cartItems$;
  }
}