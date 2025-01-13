import React from 'react'

function ProductDetails({productObj}) {
 const {productName,productImage,productDescription,productPrice,stock} = productObj;

  return (
    <article className={`product ${stock? '': "outOfStock"}`}> 
        <img src= {productImage} alt={productName} />
        <h2> {productName} </h2>
        <p> {productDescription} </p>
        <p> ${productPrice} </p>
        <button> 
            {stock? "Add to cart": "Out of stock"}
             </button>
    </article>  )
}

export default ProductDetails