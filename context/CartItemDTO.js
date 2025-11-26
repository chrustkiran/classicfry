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
    multipleOptions = undefined
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
    this.multipleOptions = multipleOptions;
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

  _areMultiOptionEqual(a = [], b = []) {
    console.log("Comparing multi options:", a, b);
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

  areMulitOptionObjectEqual(a = {}, b = {}) {
    return Object.keys(a).every((key) => {
      if (!(key in b)) return false;
      return this._areMultiOptionEqual(a[key], b[key]);
    });
  }

  checkIsSame(itemId, category, size, itemConfig, multipleOptions = undefined) {
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
      (multipleOptions && Object.keys(multipleOptions).length > 0)){
      return this.itemId === itemId && this.size === size && this.areMulitOptionObjectEqual(this.multipleOptions, multipleOptions);
    } else {
      // Logic for other item categories
      return this.itemId === itemId && this.size === size;
    }
  }
}
