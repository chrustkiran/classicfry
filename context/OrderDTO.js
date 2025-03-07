import env from "@/env";

export class PostOrderRequest {
  constructor(userId, cart, paymentType, totalAmount, checkoutDetails, paymentIntentId = undefined) {
    this.userId = userId;
    this.payment = { type: paymentType, amount: totalAmount };
    this.paymentIntentId = paymentIntentId;
    this.orderItems = [];
    
    const postCode = checkoutDetails.selectedSuburb?.postalCode
    const town = checkoutDetails.selectedSuburb?.name

    this.deliveryAddress = {streetAddress: checkoutDetails.address, town, postCode};
    this.additionalInstructions = checkoutDetails.additionalInstructions;

    this.deliveryMethod = checkoutDetails.deliveryMethod?.toUpperCase() || env.DELIVERY_METHOD.PICKUP.toUpperCase();

    if (cart && cart.length > 0) {
      this.orderItems = cart.map((item) => {
        const result = {
          quantity: item.quantity,
          portionSize: item.size,
        };
        if ("pizza" === item.category && "pizza" in item.itemConfig) {
          result.pizzaConfig = {...item.itemConfig.pizza}
        }
        if (item.type === env.ITEM_TYPE.ITEM) {
          result.item = { itemId: item.itemId };
        }
        if (item.type === env.ITEM_TYPE.DEAL) {
          result.deal = { dealId: item.itemId };
        }
        return result;
      });
    }
  }
}
