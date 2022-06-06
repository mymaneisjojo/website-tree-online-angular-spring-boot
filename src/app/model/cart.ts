import { Product } from "./product";

export class CartItem {
  id: number;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(prod: Product){
      this.id = prod.id;
      this.name = prod.name;
      this.imageUrl = prod.image;
      this.unitPrice = prod.sale_price > 0 ? prod.sale_price : prod.price;
      this.quantity = 1
  }
  }

