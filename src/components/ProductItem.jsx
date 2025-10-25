import { useDispatch } from "react-redux";
import { addCartItem } from "../utils/cartSlice";
import {addWishListItem} from "../utils/wishListSlice";
const ProductItem = ({showPrd}) => {
   const dispatch = useDispatch();
   const AddToCart = () => {
        dispatch(addCartItem(showPrd));
        alert("Product added into Cart");
    }
   const AddToWishList = () => {
        dispatch(addWishListItem(showPrd));
        alert("WishList added into Cart");
    }


    return (
        <>
        <div className="product-item">
            <img src={showPrd.image} />
         <p> { showPrd.title}</p>
         <p> <span className="prd-text">Category : </span> {showPrd.category }</p>
         <p> <span className="prd-text">Price : </span> {showPrd.price}</p>
         <p> <span className="prd-text">Available Stock : </span>  {showPrd.stock}</p>
         <div className="prd-btns">
            <button onClick={AddToCart} className={`cart-btn ${showPrd.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={showPrd.stock === 0 } > Add to Cart</button>
            <button onClick={AddToWishList} className={`wishlist-btn ${showPrd.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={showPrd.stock === 0 }> Add to Wishlist</button>
         </div>
         </div>
        </>
    )
};
export default ProductItem;