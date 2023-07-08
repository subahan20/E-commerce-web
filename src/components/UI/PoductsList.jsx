import React from "react";
import ProductCard from "./ProductCard";

const productsList = ({data}) => {
    return (
    <>
    {
        data ?.map(item=>(
            <ProductCard item={item} />
        ))
    }
    </>
    )
}
export default productsList;