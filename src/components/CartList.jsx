import CartItem from './CartItem.jsx';
const CartList = ({show}) => {

    return (
        <>

      

      
         
             <table className="cart-table">
        {show  &&
        (show.map((cart) => <CartItem key={cart.id} showCart = {cart} /> )) }
        </table>

       


        </>
    )
};

export default CartList;