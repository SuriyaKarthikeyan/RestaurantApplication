//import useProductCategories from "../hooks/useProductCategories.js";
//import {useState} from "react";
import {useSelector} from "react-redux";
//import CatList from "./CatList.jsx";
import ProductList from "./ProductList.jsx";
import SearchProducts from "./SearchProducts.jsx";
import SortingFeature from "./SortingFeature.jsx";
import useProductDetails from "../hooks/useProductDetails.js";
const UserDashboard = () => {

  
//    const [currentCategory, setCurrentCategory] = useState(null); 
//    console.log("in User Dashboard");
//     useProductCategories();
   
//     const categoryResult = useSelector((store)=> store.category);
//     if (!categoryResult || categoryResult.length === 0) {
//        return <p>Loading categories...</p>;
//     }

//     const showRelatedProducts = (name) => {
      
//       setCurrentCategory(name);
//     }

     useProductDetails();
     const productResult = useSelector((store)=> store?.products);
     const searchValue = useSelector((store)=>store?.searchValue);
     const sortValue = useSelector((store)=>store?.sortValue);

     if (!productResult || productResult.length === 0) {
       return <p>Loading Products...</p>;
     }
     let searchedResult = null;
     let sortedResult = null;

     console.log(searchValue);
    

  
      const showProductResult = () => {
        return productResult;
      }

      const showSortedResult = (productList = productResult) => {
          if(sortValue === "Title") 
          {
          sortedResult = [...productList].sort((a, b) =>
                a.title.localeCompare(b.title));
          }
          if(sortValue === "Price -- Low to High") 
          {
            sortedResult = [...productList].sort((a, b) => a.price - b.price);
          }
          if(sortValue === "Price -- High to Low") 
          {
            sortedResult = [...productList].sort((a, b) => b.price - a.price);
          }
          if(sortValue === "Highest to Lowest Rating") 
          {
            sortedResult = [...productList].sort((a, b) => b.rating.rate - a.rating.rate);
          }
          return sortedResult;
        }

      const showSearchedResult = () => {
            searchedResult = productResult.filter((prd)=> prd.category.toLowerCase().includes(searchValue.toLowerCase())   
            || prd.title.toLowerCase().includes(searchValue.toLowerCase())
            || prd.description.toLowerCase().includes(searchValue.toLowerCase())
        );
         return searchedResult;
        }
      
      
      let resultList = null;
      if(!searchValue && !sortValue) {
        resultList = showProductResult();
      }
      else if(!searchValue && sortValue) {
        resultList = showSortedResult();
      }
      else if(searchValue && !sortValue) {
        resultList = showSearchedResult();
      }
      else {
        const searchList = showSearchedResult();
        resultList = showSortedResult(searchList);
      }

    return (
        <>
        <div className="pl-20">
        <p className="user-dashboard"> User Dashboard </p>
         <div className="display-features">
         <SearchProducts />
         <SortingFeature />
         </div>
         <h2 className="prd-cat-title">Products: </h2>
         {    ( resultList.length!==0 ?  ( <ProductList show={resultList} /> )  : ("No results found") ) }

        
      

         {/* 
         <h2 className="prd-cat-title"> Product Categories <span className="click-text">[Click any of the category below to see the products associated with it] </span> </h2>
            <div className="category-list">
               { 
               categoryResult && 
               (categoryResult.map((cat)=> <CatList key={cat.id} onClick={()=>showRelatedProducts(cat.name)} listItem={cat.name} listImg={cat.image}/>))
               
               }
                
               </div>

              
            { currentCategory &&
             (
             <>
             <h2 className="prd-cat-title"> Product Details for the Category: {currentCategory} </h2>
             <ProductList cat={currentCategory} /> 
             </>
             )
            }  */}
        </div>
        </>
    )
};

export default UserDashboard;