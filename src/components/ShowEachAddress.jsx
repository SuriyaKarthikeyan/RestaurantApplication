import { useDispatch } from "react-redux";
import { storeCurrentAddress, toggleChangeButton } from "../utils/currentAddressSlice";
const ShowEachAddress = ({address}) => {
    const dispatch = useDispatch();
    const storeDeliverAddress = () => {
        dispatch(storeCurrentAddress(address));
        dispatch(toggleChangeButton());
    }
    return (
        <>
            <div className="add-box">
            <p className="font-size-16 add-title show-add-title">{address.type}</p>
              <p className="add-text">{address.address}</p> 
            <button onClick={storeDeliverAddress} className="add-btn">DELIVER HERE </button>
          
        </div>
        </>
    )
};

export default ShowEachAddress;