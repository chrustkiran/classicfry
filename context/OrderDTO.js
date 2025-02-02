import env from "@/env";

export class PostOrderRequest {
  constructor(userId, cart, paymentType, totalAmount) {
    this.userId = userId;
    this.payment = { paymentType: paymentType, amount: totalAmount };
    this.orderItems = [];
    cart.map((item) => {
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
