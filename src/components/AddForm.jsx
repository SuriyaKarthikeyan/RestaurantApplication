import { useRef } from "react";
import { useDispatch } from "react-redux";
import { storeSavedAddress } from "../utils/savedAddressesSlice";
import { toggleAddAddressState } from "../utils/savedAddressesSlice";
const AddForm = () => {    
    const addressType = useRef(null);
    const fullAddress = useRef(null);
    const dispatch = useDispatch();
    
    const getAddress = (e) => 
        {
            e.preventDefault();
             const typeValue = addressType.current?.value.trim();
             const addressValue = fullAddress.current?.value.trim();
             console.log("Type Value");
             console.log(typeValue);
             if (typeValue && addressValue) 
            {
               const savedAddressObj = {
                  type : typeValue,
                  address : addressValue
                } 
                dispatch(storeSavedAddress(savedAddressObj));
                dispatch(toggleAddAddressState());
            }
        }
    return (
        <>
        <div className = "add-new-address-form">
            <form className = "address-form">
                <input className="address-type" ref={addressType} type="text" placeholder="Home/Work/Other" />
                <input className="full-address" ref={fullAddress} type="text" placeholder="Enter Address" />

                <button className="save-btn" onClick={getAddress}>SAVE AND PROCEED </button>
            </form>
        </div>
        </>
    )
};

export default AddForm;