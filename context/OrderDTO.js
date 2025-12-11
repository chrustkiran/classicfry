import env from "@/env";

export class PostOrderRequest {
  constructor(userId, cart, paymentType, totalAmount, checkoutDetails, branch, paymentIntentId = undefined) {
    this.userId = userId;
    this.payment = { type: paymentType, amount: totalAmount };
    this.paymentIntentId = paymentIntentId;
    this.orderItems = [];
    this.branch = branch;

    const postCode = checkoutDetails.selectedSuburb?.postalCode
    const town = checkoutDetails.selectedSuburb?.name

    this.deliveryAddress = { streetAddress: checkoutDetails.address, town, postCode };
    this.additionalInstructions = checkoutDetails.additionalInstructions;

    this.deliveryMethod = checkoutDetails.deliveryMethod?.toUpperCase() || env.DELIVERY_METHOD.PICKUP.toUpperCase();

    if (cart && cart.length > 0) {
      this.orderItems = cart.map((item) => {
        const result = {
          quantity: item.quantity,
          portionSize: item.size,
        };
        if ("pizza" === item.category && "pizza" in item.itemConfig) {
          result.pizzaCrust = item.itemConfig.pizza.crusts[0]
          result.toppings = item.itemConfig.pizza.toppings
        }
        if (item.type === env.ITEM_TYPE.ITEM) {
          result.item = { itemId: item.itemId };
        }
        if (item.type === env.ITEM_TYPE.DEAL) {
          result.deal = { dealId: item.itemId };
          if (item.multipleOptions) {
            const modifedKeyMultliOption = Object.keys(item.multipleOptions).reduce((acc, multiObjKey) => {
              acc[env.MULTI_OBJ_CONF[multiObjKey].addToCartKey] = item.multipleOptions[multiObjKey];
              return acc;
            }, {})
            Object.assign(result, modifedKeyMultliOption);
          }
          if (item.extra) {
            result.extras = item.extra.map(e => e.name);
          }
        }
        console.log('result ', result)
        return result;
      });
    }
  }
}
