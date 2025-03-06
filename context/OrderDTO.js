import env from "@/env";

export class PostOrderRequest {
  constructor(userId, cart, paymentType, totalAmount, checkoutDetails, paymentIntentId = undefined) {
    this.userId = userId;
    this.payment = { type: paymentType, amount: totalAmount };
    this.paymentIntentId = paymentIntentId;
    this.orderItems = [];

    const postCodeWithBracket = checkoutDetails.selectedSuburb?.split(" ")[1];
    const postCode = postCodeWithBracket?.substring(1, postCodeWithBracket.length - 1);
    const town = checkoutDetails.selectedSuburb?.split(" ")[0];

    this.deliveryAddress = {streetAddress: checkoutDetails.address, town, postCode};
    this.additionalInstructions = checkoutDetails.additionalInstructions;

    this.deliveryAddress = checkoutDetails.deliveryMethod?.toUpperCase() || env.DELIVERY_METHOD.PICKUP.toUpperCase();

    if (cart && cart.length > 0) {
      this.orderItems = cart.map((item) => {
        const result = {
          quantity: item.quantity,
          portionSize: item.size,
        };
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
