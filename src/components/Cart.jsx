import Header from './Header.jsx';
import {useSelector} from "react-redux";
import CartList from "./CartList.jsx";
import CurrentAddress from "./CurrentAddress.jsx";
import SavedAddress from './SavedAddress.jsx';
const Cart = () => {
   const cartResult = useSelector((store)=> store?.cart);
   const addressResult = useSelector((store)=> store?.currentAddress?.changeText);
   console.log(cartResult);
    const totalPrice = cartResult.reduce((total, item) => {
        return total + item.price * item.quantity;
  }, 0);

  return (
      <>
        
        <Header context="cart" />
        {!cartResult || cartResult.length === 0 ? ( <p className="no-items"> No items in Cart </p> ) :
          (
          <div className="cart-result">

              <div className="cart-section">

                <div className="cart-list">
                   <p>Cart Results: </p>
                   <CartList show={cartResult} />
                   <hr />

                   <p> Total Price : </p>
                   <table className="cart-table">
                    <tr>
                      <td>Item Total: </td>
                      <td>{totalPrice}</td>
                      <td></td>
                      <td></td>
                    </tr>
                   </table>
                </div>

                <div className="address-details">
                
                {addressResult ? <SavedAddress /> : <CurrentAddress />}
                </div>

              </div>
          </div>
          )}
        </>
  )
}
export default Cart;