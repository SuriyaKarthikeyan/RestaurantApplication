import { toggleChangeButton } from "../utils/currentAddressSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addOrder } from "../utils/orderSlice";
const CurrentAddress = () => {
    const [isOrdered, setIsOrdered] = useState(false);
    const dispatch = useDispatch();
 
    const deliveryAddress = useSelector((store)=> store?.currentAddress?.address);
    const itemsInCart = useSelector((store)=> store?.cart);
    const toggleChange = () => {
        dispatch(toggleChangeButton());
    }

    const saveOrder = () => {
        setIsOrdered(true);
        itemsInCart.map((item)=> {
            console.log("item");
            console.log(item);
            const {id, image, title, price, quantity} = item;
            const orderObj = {id, image,title,price,quantity,status: "On Process"};
            dispatch(addOrder(orderObj));
        })
    }
    
    return (
        <>
        <div className="current-address">
            
            <div className="current-address-left">
            <p className="address-heading"> Delivery Address</p>
            <div className="address-details">
                <p className="address-title">{deliveryAddress.type}</p>
                <p className="address-det">{deliveryAddress.address}</p>
            </div>
            </div>

            <div className="current-address-right">
                <p onClick={toggleChange} className="change-text">CHANGE</p>
            </div>
        </div>

{deliveryAddress.address === "Set up your current address before proceeding with placing the Order." ? (" ") : 
      (  <div className="order-section">
            <p className="order-heading">Order Details </p>
        <button onClick={saveOrder} className="order-btn">Order Now</button>
           
            {isOrdered ? <p>Order Placed Successfully. Please view your order details in Order History Page</p> : ""}
        </div>
      ) }
        </>
    )
};

export default CurrentAddress;