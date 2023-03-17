import Header from './Layout/Header';
import './App.css';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';


function App() {
  return (
    <>
    <Cart></Cart>
      <Header/>
      <main>
        <Meals/>
      </main>

    </>
  );
}

export default App;
