var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName=item
  var itemPrice=Math.floor(Math.random()*100)
  var items={item, itemPrice}
  cart.push(items);
  return `${item} has been added to your cart.`
  
}

function viewCart() {
  var str='In your cart, you have '
  if (cart.length<1){
    
  }
}else if (cart.length===1){
  
}e

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
