const CashRegister = {
  shoppingCart: [],
  itemsForSale: [
    { name: 'Phone', price: 300 },
    { name: 'Smart TV', price: 220 },
    { name: 'Gaming Console', price: 150 }
  ],

  addItem(itemName) {
    const item = this.itemsForSale.find(item => item.name === itemName);
    if (item) {
      this.shoppingCart.push(item);
      this.updateCartDisplay();
    } else {
      alert(`Sorry, we don't sell ${itemName}.`);
    }
  },

  calculateTotalPrice() {
    let totalPrice = 0;
    this.shoppingCart.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  },

  applyDiscount(totalPrice) {
    if (totalPrice > 400) {
      return totalPrice * 0.9; // 10% discount
    }
    return totalPrice;
  },

  pay(paymentAmount) {
    const totalPrice = this.calculateTotalPrice();
    const discountedPrice = this.applyDiscount(totalPrice);

    if (paymentAmount >= discountedPrice) {
      const change = paymentAmount - discountedPrice;
      alert('Thank you for your purchase!');
      if (change > 0) {
        alert(`Your change is $${change.toFixed(2)}.`);
      }
      this.shoppingCart = []; // Clear the shopping cart
      this.updateCartDisplay();
    } else {
      alert('Insufficient payment amount. Please provide enough money.');
    }
  },

  updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    this.shoppingCart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name}: $${item.price}`;
      cartItemsElement.appendChild(li);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const itemName = item.textContent.trim();
      CashRegister.addItem(itemName);
    });
  });

  const payBtn = document.getElementById('pay-btn');
  payBtn.addEventListener('click', () => {
    const paymentAmount = prompt('Enter payment amount:');
    if (paymentAmount) {
      CashRegister.pay(parseFloat(paymentAmount));
    }
  });
});
