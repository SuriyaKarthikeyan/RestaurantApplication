import '../App.css';
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { signOut } from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice.js";
import {useSelector} from "react-redux";
const Header = ({context}) => {
   //SignOut Authentication from Firebase
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const readUser = useSelector((store)=> store?.user);
  

    const handleSignOut = () => {
    signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");
        }).catch((error) => {
                // An error happened.
        });
    }

useEffect(()=> {
    if(readUser) {
        if(context==="cart") {
             navigate("/cart");
        }
        else if(context === "wishlist") {
            navigate("/wishlist");
        }
         else if(context === "order") {
            navigate("/orders");
        }
        else {
            navigate("/dashboard");
        }
         
    }
    else {
        console.log("in else");
        navigate("/");
    }

    },[]);

    const goToCart = () => {
        navigate("/cart");
    }
    
    const goToWishlist = () => {
        navigate("/wishlist");
    }
    const goToDashboard = () => {
        navigate("/dashboard");
    }
    const goToOrders = () => {
        navigate("/orders");
    }
    return (
        <>
            <div className="header-section">
                <p className="logo-text"> JWS Store</p>
                {context!=="login" && (
                    <div className="top-right-bar">
                     <span className="dashboard-text" onClick={goToDashboard}>Dashboard</span>
                     <span className="cart-text" onClick={goToCart}>Cart</span>
                      <span className="wl-text" onClick={goToWishlist}>WishList</span>
                      <span className="wl-text" onClick={goToOrders}>Order History</span>
                     <span className="signout-text" onClick={handleSignOut}> SignOut </span>

                     </div>
                )}
               
            </div>
        </>
    )
};

export default Header;