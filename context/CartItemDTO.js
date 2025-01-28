export class CartItem {
    constructor(itemId, name, price, image, size = 'default', quantity = 1) {
      this.itemId = itemId;
      this.name = name;
      this.size = size; 
      this.price = price;
      this.quantity = quantity;
      this.image = image
    }
  
    calculateTotalPrice = () => {
      return this.price * this.quantity;
    }

    increaseQuantity() {
      this.quantity += 1;
    }

    decreaseQuantity() {
      if (this.quantity > 1) this.quantity -= 1;
    }
  }
  