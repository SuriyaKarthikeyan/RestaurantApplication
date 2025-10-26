import { toggleAddAddressState } from "../utils/savedAddressesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
const AddAddress = () => {
    const dispatch = useDispatch();
    const addAddressState = useSelector((store)=> store.savedAddress.addAddressState);
    const toggleAddAddress = () => {
        dispatch(toggleAddAddressState());
    }
    return (
        <>
          <div className="add-box">
            <p className="font-size-16 add-title">Add New Address</p>
             {/* <p className="add-text"></p> */}
            <button onClick={toggleAddAddress} className="add-btn">ADD NEW</button>
            {addAddressState ? (<AddForm />) : ""}
        </div>
        </>
    )
};

export default AddAddress;