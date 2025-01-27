export class CartItem {
    constructor(name, price, size = 'default', quantity = 1) {
      this.name = name;
      this.size = size; 
      this.price = price;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price for this item (price * quantity)
    calculateTotalPrice() {
      return this.price * this.quantity;
    }
  
    // Method to increase the quantity
    increaseQuantity() {
      this.quantity += 1;
    }
  
    // Method to decrease the quantity
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity -= 1;
    }
  }
  