import CartItem from './CartItem.jsx';
const CartList = ({show}) => {

    return (
        <>
        <div className="cart-list">
             <table className="cart-table">
        {show  &&
        (show.map((cart) => <CartItem key={cart.id} showCart = {cart} /> )) }
        </table>
      </div>
        </>
    )
};

export default CartList;