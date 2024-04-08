const cashRegister = {
  shopping_cart: [],
  itemList: [
    {name: "phone", price: 300},
    {name: "SmartTv", price: 220},
    {name: "GamingConsole", price: 150}
  ],
  addItem: function(itemName) {
    item = this.itemList.find(item => item.name === itemName);
    if (item) {
      this.shopping_cart.push(item);
    }
    else {
      console.log("Sorry we don't have this item available")
    }
  },
  calculateTotalPrice: function() {
    let totalPrice = 0;
    this.shopping_cart.forEach(item => {
      totalPrice += item.price;
    })
    return totalPrice
  },
  pay: function(amount) {
    let total = this.calculateTotalPrice();
    if (total > 400) {
      total *= 0.9;
    }
    else {
      total = total;
    }
    if (total > amount) {
      console.log("Sorry you don't have enough money, kindly add an additional " + (total - amount) + "$ to your account")
    }
    else if (total < amount) {
      console.log("Thank you for your purchase!")
      console.log("Your change is: " + (amount - total))
    }
    else {
      console.log("Thank you for your purchase!")
    }
  }
}

cashRegister.addItem("phone");
cashRegister.addItem("SmartTv");
cashRegister.addItem("GamingConsole");
console.log(cashRegister.shopping_cart)
console.log(cashRegister.calculateTotalPrice())
cashRegister.pay(500);
