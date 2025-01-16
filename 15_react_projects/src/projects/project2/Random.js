import React from 'react'
import './App.css';
function Random() {

  async function getProduct(){
    try {
      //recuperer une liste de produit en utilisant l'api fakestore
      const res = await fetch('https://fakestoreapi.com/products'); 
      //rendre la liste de produits au format json
      const data = await res.json();
      console.log(data);
      //generer un nombre entier inferieur au nombre d'element de la liste
      const randomNumber = Math.floor(Math.random()*data.length);
      console.log(randomNumber);
      //recuperation du produit d'indice genere
      const randomProduct = data[randomNumber-1];
      console.log(randomProduct);
    } catch (error) {
      console.log('failed to fetch the product', error);
    }
  }

  return (
    <div className='product-container'>
      <h1> Product Title</h1>
      <img src='' alt='' />
      <p>You have seen 1 Product</p>
      <button onClick={getProduct}>Generate Random Product</button>
    </div>
  )
}

export default Random