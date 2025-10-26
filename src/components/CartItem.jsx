import { removeCartItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";
const CartItem = ({showCart}) => {
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(removeCartItem(showCart.id));
    }
    return (
        <>
           
                <tr>
                    <td>{showCart.title}</td>
                    <td>{showCart.price}</td>
                    <td><button onClick={removeItem} className="remove-cart">Remove from Cart </button></td>
                      <td>Qty: {showCart.quantity}</td>
                </tr>

                


            
        </>
    )
};

export default CartItem;