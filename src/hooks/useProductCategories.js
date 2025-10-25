import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {showCategories} from "../utils/categorySlice.js";
const useProductCategories = () => {
    console.log("in useProduct Categories");
    const dispatch = useDispatch();
    const showProductCategories =  async() => {
        try {
                
                 const data = await fetch("http://localhost:5000/categories");
                  if (!data.ok) {
                        throw new Error(`Response status: ${data.status}`);
                  }
                   const results = await data.json();
                     
                        dispatch(showCategories(results));
            }
            catch(error) {
                  console.error(error.message);
            }
       }
   
    useEffect(()=> {
       showProductCategories();
   },[]);
}

export default useProductCategories;