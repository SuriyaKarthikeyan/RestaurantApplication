import Header from './Header.jsx';
import {useSelector} from "react-redux";
import CartList from "./CartList.jsx";
const Cart = () => {
   const cartResult = useSelector((store)=> store?.cart);
  return (
      <>
        
        <Header context="cart" />
          <div className="cart-result">
              <p>Cart Results: </p>
          <CartList show={cartResult} />
       </div>
       
        </>
  )
}
export default Cart;