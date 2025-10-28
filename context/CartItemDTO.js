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
    itemConfig = {},
    drinkOptions = undefined
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
    this.drinkOptions = drinkOptions;
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

  _areDrinksEqual(a = [], b = []) {
    if (a.length !== b.length) return false;
    
    a = a.sort((a,b) => a.name.localeCompare(b.name));
    b = b.sort((a,b) => a.name.localeCompare(b.name));
    return a.every((drinkA, index) => {
      const drinkB = b[index];
      const aid = drinkA?.itemId ?? drinkA?.id ?? drinkA;
      const bid = drinkB?.itemId ?? drinkB?.id ?? drinkB;
      return String(aid) === String(bid);
    });
  }

  checkIsSame(itemId, category, size, itemConfig, drinkOptions = undefined) {
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
    } // if either existing cart item or incoming config has drinks, require drinks to match
    else if (
      (drinkOptions && drinkOptions.length > 0)) {
      return this.itemId === itemId && this.size === size && this._areDrinksEqual(this.drinkOptions, drinkOptions);
    } else {
      // Logic for other item categories
      return this.itemId === itemId && this.size === size;
    }
  }
}
