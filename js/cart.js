class Cart {
  addEventListeners() {
    this.cartContainer.on('show.bs.modal', () => this.renderCart());
  }
  updateBadge() {
    $('#cart-badge').text(Object.keys(this.cart).length);
  }
}
