import React, { useEffect, useState } from 'react'
import './App.css';
import Message from './Message';
function Random() {

  const [product, setProduct] = useState(
    {
      title : '',
      image : '',  
    }
  );
  const [count, setCount] = useState(0);

  useEffect(()=>{
    getProduct()
  },[])

  async function getProduct(){
    try {
      //recuperer une liste de produit en utilisant l'api fakestore
      const res = await fetch('https://fakestoreapi.com/products'); 

      //rendre la liste de produits au format json
      const data = await res.json();

      //generer un nombre entier inferieur au nombre d'element de la liste
      const randomNumber = Math.floor(Math.random()*data.length);

      //recuperation du produit d'indice genere
      const randomProduct = data[randomNumber-1];

      //modification du state product
      const newProduit = {title : randomProduct.title,image : randomProduct.image}
      setProduct(newProduit);
    } catch (error) {
      console.log('failed to fetch the product', error);
    }
    setCount(count+1);

  }

  return (
    <div className='product-container'>
      <h1> {product.title? product.title : 'Product Title'}</h1>
      <img src={product.image} alt={product.title} />
      <Message count = {count}/>
      <button onClick={getProduct}>Generate Random Product</button>
    </div>
  )
}

export default Random