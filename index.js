var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = new Object({[item]: Math.floor(Math.random() * 100)}) ;
  cart.push(obj) ;
  console.log(`${item} has been added to your cart.`) ;
  return cart ;
}

function viewCart() {
  var cartStr = "In your cart, you have" ;

  if(cart.length == 0)
  {
    console.log('Your shopping cart is empty.') ;
  }

  for(var i = 0; i < cart.length;  i++)
  {
    var itemName = Object.keys(cart[i])[0] ;
    //var price = Object.values(cart[i])[0] ;
    var price = cart[i][itemName] ;

    if ( i == cart.length  -1)
    {
      cartStr = cartStr + ` ${itemName} at $${price}.`
    }
    else if( i == cart.length -2 && cart.length == 2)
    {
      cartStr = cartStr + ` ${itemName} at $${price} and` ;
    }
    else
    {
      cartStr = cartStr + ` ${itemName} at $${price}${i == (cart.length - 2) ? ', and' : ','}`
    }

  }
    console.log(cartStr) ;
}

function total() {
  var totalValue = 0 ;
  if(cart.length != 0)
    {
    for(var i = 0; i < cart.length; ++i)
    {
      var key = Object.keys(cart[i])[0]
      //totalValue = totalValue + Object.values(cart[i])[0] ;
      totalValue = totalValue + cart[i][key] ;

    }
  }
  return totalValue ;
}

function removeFromCart(item) {
  for( var i = 0; i < cart.length; ++i) {
    if(cart[i].hasOwnProperty(item))
    {
      cart.splice(i, 1) ;
      return cart ;
    }
  }
  console.log("That item is not in your cart.") ;
}

function placeOrder(cardNumber) {
  if (cardNumber)
  {
   var totalValue = total() ;
   cart = [] ; 
   console.log(`Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`);

  } else {
    console.log("Sorry, we don't have a credit card on file for you.") ;
  }
}
