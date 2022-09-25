export default class Order {
  constructor() {
    this.table;
    this.orders = {};
  }
  setTable(table) {
    this.table = table;
  }

  setOrder(order, quantity) {
    let counter = 0;
    if (quantity <= 0) {
    }
    if (quantity > 1) {
      for (let i = 0; i < quantity; i++) {
        counter++;
        this.orders[order] = counter;
      }
    } else if (quantity == 1) {
      this.orders[order] = 1;
    }
  }
}

