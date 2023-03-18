import Header from './Components/Layout/Header'
import './App.css';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import React from 'react';
import Cartprovider from './Store/CartProvider';


function App() {

  

  const [viewcart,setViewCart] = React.useState(false)

const viewCartHandler = () =>{
  setViewCart(!viewcart)
}

  return (
    <Cartprovider>
   {viewcart && <Cart closeCart={viewCartHandler}/>}
      <Header openCart={viewCartHandler}/>
      <main>
        <Meals/>
      </main>

      </Cartprovider>
  );
}

export default App;
