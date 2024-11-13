import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { STAMPS } from '../mock-stamps';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-show-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-room.component.html',
  styleUrl: './show-room.component.css'
})
export class ShowRoomComponent implements OnInit {
  stamps: Stamp[] = [];
  

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.stamps = STAMPS;
  }

  addToCart(stamp: Stamp) {
    const cartItem = { ...stamp, quantity: stamp.quantity || 1 };
    this.cartService.addToCart(cartItem);
  }
}