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
    multipleOptions = undefined,
    extra = undefined
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
    this.extra = extra
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

  _areExtrasEqual(a = [], b = []) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort((x, y) => String(x.extraItemId).localeCompare(String(y.extraItemId)));
    const sortedB = [...b].sort((x, y) => String(x.extraItemId).localeCompare(String(y.extraItemId)));
    return sortedA.every((extraA, idx) => {
      const extraB = sortedB[idx];
      return String(extraA.extraItemId) === String(extraB.extraItemId) && extraA.quantity === extraB.quantity;
    });
  }

  checkIsSame(itemId, category, size, itemConfig, multipleOptions = undefined, extra = undefined) {
    if (category === "pizza" && category in itemConfig) {
      if (this.category !== "pizza") return false;
      const isSameItem = this.itemId === itemId && this.size === size;
      const isSameCrust =
        this.itemConfig.pizza.crusts[0] === itemConfig.pizza.crusts[0];
      const hasSameToppings =
        this.itemConfig.pizza.toppings.length ===
        itemConfig.pizza.toppings.length &&
        this.itemConfig.pizza.toppings.every((topping) =>
          this.itemConfig.pizza.toppings.includes(topping)
        );
      return isSameItem && isSameCrust && hasSameToppings;
    } else if (multipleOptions && Object.keys(multipleOptions).length > 0) {
      const extrasMatch = this._areExtrasEqual(this.extra, extra);
      return this.itemId === itemId && 
             this.size === size && 
             this.areMulitOptionObjectEqual(this.multipleOptions, multipleOptions) &&
             extrasMatch;
    } else {
      const extrasMatch = this._areExtrasEqual(this.extra, extra);
      return this.itemId === itemId && this.size === size && extrasMatch;
    }
  }
}
