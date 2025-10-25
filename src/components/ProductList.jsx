import ProductItem from "./ProductItem.jsx";


const ProductList = ({show}) => {
  


      //  const filteredProducts = productResult.filter((prd)=> prd.category === cat);
       
    

   return (
    <>
      <div className="product-list">
        {show  &&
        (show.map((product) => <ProductItem key={product.id} showPrd = {product} /> )) }
      </div>
    </>
   )

};

export default ProductList;