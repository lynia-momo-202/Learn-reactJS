import React from 'react'
import ProductDetails from './ProductDetails'
import { products } from '../products'

function ProductContainer() {
    // const products=[]
    const productLenght = products.length
    return (
        <main>
            {
                productLenght 
                ?
                    (<section className='products'>
                        {products.map((product) => (
                            < ProductDetails
                                key={product.productName}
                                productObj = {product}
                            /> 
                            )) 
                        }
                    </section>)
                : 
                    <p className='noproducts'>products will be available soon</p>
            }
        </main>
    )
}

export default ProductContainer