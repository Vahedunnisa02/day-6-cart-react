import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Panel from './Components/Panel/Panel'
import Footer from './Components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  const [itemsInCart, setItemsInCart] = useState(4);
  const [mainPrice, setPrice] = useState(2199.96);
  const [isCartCleared, setCartCleared] = useState(false); // New state to track cart clearance

  const addQty = (price) =>{
    setItemsInCart(itemsInCart + 1);
    const val = Number(price);
    // const roundedNumber = parseFloat(val.toFixed(2));
    setPrice(mainPrice+val);
  }

  const reduceQty = (price) =>{
    if(itemsInCart > 0){
      setItemsInCart(itemsInCart - 1);
    }

    const val = Number(price);
    setPrice(mainPrice - val);
  }

  const increaseFn = () =>{

  }

  // const CartItems = [
  //   {
  //     "title": "Samsung Galaxy S8",
  //     "price": "$399.99",
  //     "img": "https://www.course-api.com/images/cart/phone-1.png",
  //     "logo": "remove",
  //     "id": 1
  //   },

  //   {
  //     "title": "google pixel",
  //     "price": "$499.99",
  //     "img": "https://www.course-api.com/images/cart/phone-2.png",
  //     "logo": "remove",
  //     "id": 2
  //   },

  //   {
  //     "title": "Xiaomi Redmi Note 2",
  //     "price": "$699.99",
  //     "img": "https://www.course-api.com/images/cart/phone-3.png",
  //     "logo": "remove",
  //     "id": 3
  //   },

  //   {
  //     "title": "Samsung Galaxy S7",
  //     "price": "$599.99",
  //     "img": "https://www.course-api.com/images/cart/phone-4.png",
  //     "logo": "remove",
  //     "id": 4
  //   }
  // ]

  const [cartItems, setCartItems] = useState([
    {
      "title": "Samsung Galaxy S8",
      "price": "399.99",
      "img": "https://www.course-api.com/images/cart/phone-1.png",
      "logo": "remove",
      "id": 1
    },
    {
      "title": "Google Pixel",
      "price": "499.99",
      "img": "https://www.course-api.com/images/cart/phone-2.png",
      "logo": "remove",
      "id": 2
    },
    {
      "title": "Xiaomi Redmi Note 2",
      "price": "699.99",
      "img": "https://www.course-api.com/images/cart/phone-3.png",
      "logo": "remove",
      "id": 3
    },
    {
      "title": "Samsung Galaxy S7",
      "price": "599.99",
      "img": "https://www.course-api.com/images/cart/phone-4.png",
      "logo": "remove",
      "id": 4
    }
  ]);


  // const removeCart = (id) =>{
  //   setCartItems(cartItems.filter(function(item){
  //     return item.id !== id;
  //   }));
  //   setItemsInCart(itemsInCart - 1); // Update total items in cart
  // };

  const removeCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setItemsInCart(itemsInCart - 1); // Update total items in cart
  };

  const removePanel = (id, price) =>{
    setCartItems(cartItems.filter((item) => item.id !== id));
    const val = Number(price);
    setPrice(mainPrice - val);
  }

  const clearCart = () =>{
    setCartCleared(true);
    setCartItems([]);
  }

  return (
    <div>
      <Navbar itemsInCart={itemsInCart}></Navbar>
      {/* <h1>{itemsInCart}</h1> */}

      <div className={"container"}>
        <h1 className={"bag"}>YOUR BAG</h1>
      {
        cartItems.length > 0 && !isCartCleared ? (cartItems.map((cart, index) =>{
          return (
          <Panel 
              title={cart.title} 
              price={cart.price} 
              img={cart.img} 
              logo={cart.logo} 
              addQty={addQty} 
              reduceQty={reduceQty} 
              id={cart.id} 
              removeCart={removeCart}
              removePanel={removePanel}>
          </Panel>
        )
        })) : (<p class={"alignment"}>Your bag is empty.</p>)
      }
      </div>

      {/* <Footer mainPrice={mainPrice} clearCart={clearCart}></Footer> */}
      {!isCartCleared && <Footer mainPrice={mainPrice} clearCart={clearCart}></Footer>}

    </div>
  )
}

export default App
