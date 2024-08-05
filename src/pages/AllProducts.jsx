import React from "react";
import Products from "../components/Products";

const AllProducts = ({products, setProducts}) => {
    return (
        <div>
            <Products products={products} setProducts={setProducts}/>
        </div>
    );
};

export default AllProducts;
