import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {showProducts} from "../utils/productSlice.js";
const useProductDetails = () => {
   
    const dispatch = useDispatch();
    const showProductDetails =  async() => {
        try {
                 console.log("in Async call");
                  console.log("in useProduct Details");
                 const data = await fetch("http://localhost:5000/products");
                  if (!data.ok) {
                        throw new Error(`Response status: ${data.status}`);
                  }
                   const results = await data.json();
                        console.log("Results from API call");
                        console.log(results);
                        dispatch(showProducts(results));
            }
            catch(error) {
                  console.error(error.message);
            }
       }
   
    useEffect(()=> {
       showProductDetails();
   },[]);
}

export default useProductDetails;