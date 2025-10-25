import Header from './Header.jsx';
import {useSelector} from "react-redux";
import WLList from "./WLList.jsx";
const WishList = () => {
     const wlResult = useSelector((store)=> store?.wishlist);
    return (
        <>
        <Header context="wishlist" />
          <div className="cart-result">
              <p>Wishlist Results: </p>
          <WLList show={wlResult} />
       </div>
        </>
    )
};

export default WishList;