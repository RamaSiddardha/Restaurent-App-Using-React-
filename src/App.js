import Header from './Layout/Header';
import './App.css';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import React from 'react';


function App() {

  

  const [viewcart,setViewCart] = React.useState(false)

const viewCartHandler = () =>{
  setViewCart(!viewcart)
}

  return (
    <>
   {viewcart && <Cart closeCart={viewCartHandler}/>}
      <Header openCart={viewCartHandler}/>
      <main>
        <Meals/>
      </main>

    </>
  );
}

export default App;
