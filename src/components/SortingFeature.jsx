import {useRef} from "react";
import {useDispatch} from "react-redux";
import {storeSortValue} from "../utils/sortValueSlice.js";
const SortingFeature = () => {
    const sortedItem = useRef(null);
    const dispatch = useDispatch();
    const pushSortedItem = () => {
        dispatch(storeSortValue(sortedItem.current.value));
    }
    return (
        <>
            <div className="sort-box">
            <span> Sort By: </span>
            <select onChange={pushSortedItem} ref={sortedItem}>
                <option>Title</option>
                <option>Price -- Low to High</option>
                <option>Price -- High to Low</option>
                <option>Highest to Lowest Rating</option>
            </select>
            </div>
        </>
    )

}
export default SortingFeature;