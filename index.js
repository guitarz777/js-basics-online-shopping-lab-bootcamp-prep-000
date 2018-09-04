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
  if (cart.length>0){
    for (let i=0; i<cart.length; i++){
      var item = Object.keys(cart[i])
      var price = Object.values(cart[i])
      str += `${itemName} at $${pricePrice}`
      if (i+1<cart.length){
        str += ", "
      }else{
        str += "."
      }
    }
    return str
  }else{
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
