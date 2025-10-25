import { removeWLItem } from "../utils/wishlistSlice";
import {useDispatch} from "react-redux";
const WLItem = ({showWL}) => {
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(removeWLItem(showWL.id));
    }
    return (
        <>
           
                <tr>
                    <td>{showWL.title}</td>
                    <td>{showWL.price}</td>
                    <td><button onClick={removeItem} className="remove-cart">Remove from Wishlist </button></td>
                    
                </tr>
            
        </>
    )
};

export default WLItem;