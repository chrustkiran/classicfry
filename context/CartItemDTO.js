import env from "@/env";

export class CartItem {
  constructor(
    itemId,
    name,
    price,
    image,
    category,
    size = env.DEFAULT,
    quantity = 1,
    type = "ITEM",
    itemConfig = {}
  ) {
    this.itemId = itemId;
    this.name = name;
    this.size = size;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
    this.image = image;
    this.type = type;
    this.itemConfig = itemConfig;
  }

  calculateTotalPrice = () => {
    return this.price * this.quantity;
  };

  increaseQuantity(size = 1) {
    this.quantity += size;
  }

  decreaseQuantity(size = 1) {
    if (this.quantity > size) this.quantity -= size;
  }

  checkIsSame(itemId, category, size, itemConfig) {
    if (category === "pizza" && category in itemConfig) {
      //if we add other items, when it compare with other items exist in cart. it should be false
      if (this.category !== "pizza") return false;
      // Pizza-specific logic
      const isSameItem = this.itemId === itemId && this.size === size;
      // Ensure crust matches
      const isSameCrust =
        this.itemConfig.pizza.crusts[0] === itemConfig.pizza.crusts[0];
      // Ensure all toppings in itemConfig are present in item.config.toppings
      const hasSameToppings =
        this.itemConfig.pizza.toppings.length ===
          itemConfig.pizza.toppings.length &&
        itemConfig.pizza.toppings.every((topping) =>
          this.itemConfig.pizza.toppings.includes(topping)
        ); // Ensure no extra toppings

      return isSameItem && isSameCrust && hasSameToppings;
    } else {
      // Logic for other item categories
      return this.itemId === itemId && this.size === size;
    }
  }
}
