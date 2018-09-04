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
  var items={'itemName': itemName, 'itemPrice' :itemPrice}
  cart.push(items);
  return `${item} has been added to your cart.`
  
}

function viewCart() {
  var str='In your cart, you have '
  if (cart.length<1){
    return "Your shopping cart is empty."
  }else if (cart.length===1){
    return `${str}${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if (cart.length===2){
    return `${str}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    var i = 0;
    while (i<cart.length){
      str += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      i+=1;;
      if (i===cart.length-1){
       str+=`, and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
       return str;
       }else{
         str+=`, `;
       }
    }
  }
}    


function total() {
  var prices = [];
  for (let i = 0; i < cart.length; i++){
    prices.push(cart[i].itemPrice)
  }
  
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
