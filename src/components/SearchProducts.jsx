import {useRef} from "react";
import {useDispatch} from "react-redux";
import {storeSearchValue} from "../utils/searchValueSlice.js";

const SearchProducts = () => {

    const searchProduct = useRef(null);
    const dispatch = useDispatch();

    const showSearchResult = (e) => {
        e.preventDefault();
         if (searchProduct.current) {
            const value = searchProduct.current.value;
            console.log("Search value:", value);
            dispatch(storeSearchValue(value)); // ✅ dispatch works fine
         }
         else {
           console.warn("Ref is not attached yet!");
         }
        
    }
    return (
        <>
        <form onSubmit={showSearchResult}>
         <input type="text" placeholder="Search any product by title, category or description" className="searchPrdBox" name="searchProduct" ref={searchProduct} />
         <button type="submit" className="search-btn"> Search </button>
         </form>
        </>
    )
};

export default SearchProducts;