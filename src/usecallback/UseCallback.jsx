import { useState ,useCallback} from "react";
import ItemList from "./ReactMemo";


function ShoppingApp() {
    const [cart, setCart] = useState([]);
  
    // useCallback prevents the function from being recreated every render
    const addToCart = useCallback((item) => {
      setCart(prevCart => [...prevCart, item]);
    },[]); // Empty dependency array ensures function stays the same across renders
  
    return (
      <div>
        <h1>Cart update</h1>
        <ItemList onItemClick={addToCart} />
        <h3>Items in cart:</h3>
        {cart.join(', ')}
      </div>
    );
  }
  
  export default ShoppingApp;
  