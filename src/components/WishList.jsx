import Header from './Header.jsx';
import {useSelector} from "react-redux";
import WLList from "./WLList.jsx";
const WishList = () => {
     const wlResult = useSelector((store)=> store?.wishlist);
    return (
        <>
        <Header context="wishlist" />

         {!wlResult || wlResult.length === 0 ? ( <p className="no-items"> No items in your WishList </p> ) :

          (<div className="cart-result">
            
            <div className="wish-list">
              <p>Wishlist Results: </p>
               <WLList show={wlResult} />
            </div>
            
       </div>
          )}
        </>
    )
};

export default WishList;