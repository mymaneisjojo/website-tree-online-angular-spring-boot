import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  storage: Storage = localStorage;


  constructor() {
     
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [];

    this.computeCartTotals();

  }

  persistCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(theCartItem: CartItem) {
   
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: any;

    if (this.cartItems.length > 0) {
      
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

    
      alreadyExistsInCart = (existingCartItem != undefined)
    }

    if (alreadyExistsInCart) {
      
      existingCartItem.quantity++;
    } else {
     
      this.cartItems.push(theCartItem);

    }




    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.persistCartItems();
  }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      this.remove(cartItem);
    } else {
      this.computeCartTotals();
    }
  }

  remove(cartItem: CartItem) {
    const itemIndex = this.cartItems
      .findIndex(
        tempCartItem => tempCartItem.id === cartItem.id
      );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }


 

}
