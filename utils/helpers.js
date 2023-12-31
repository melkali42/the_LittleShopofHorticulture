const Handlebars = require('handlebars');

// Helper to format prices with two decimal places
Handlebars.registerHelper('formatPrice', price => {
  return `$${price.toFixed(2)}`;
});

// Helper to display a message if a cart is empty
Handlebars.registerHelper('ifCartEmpty', (cartItems, options) => {
  if (cartItems.length === 0) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('section', function(name, options) {
  if (!this._sections) {
    this._sections = {};
  }
  this._sections[name] = options.fn(this);
  return null;
});


module.exports = Handlebars;


