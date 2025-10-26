import { toggleChangeButton } from "../utils/currentAddressSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CurrentAddress = () => {
    const dispatch = useDispatch();
    const deliveryAddress = useSelector((store)=> store?.currentAddress?.address);
    const toggleChange = () => {
        dispatch(toggleChangeButton());
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

        <div className="order-section">
            <p className="order-heading">Order Details </p>
            <button className="order-btn">Order Now</button>
        </div>
        </>
    )
};

export default CurrentAddress;