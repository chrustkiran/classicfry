import env from "@/env";

export class CartItem {
    constructor(itemId, name, price, image, size = env.DEFAULT, quantity = 1, type = 'ITEM') {
      this.itemId = itemId;
      this.name = name;
      this.size = size; 
      this.price = price;
      this.quantity = quantity;
      this.image = image
      this.type = type;
    }
  
    calculateTotalPrice = () => {
      return this.price * this.quantity;
    }

    increaseQuantity(size = 1) {
      this.quantity += size;
    }

    decreaseQuantity(size = 1) {
      if (this.quantity > size) this.quantity -= size;
    }
  }
  