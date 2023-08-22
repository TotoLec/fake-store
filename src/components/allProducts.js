import React, { useEffect, useState } from 'react';

function AllProducts() {

  function getProducts(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setProducts(json))
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {getProducts()})


  return (
    <div class="flex flex-wrap p-10 justify-center">
      {products.map( product => { return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg min-w-1/3 m-auto mx-4 my-4">
          <a href={product.id} class="font-bold text-xl mb-2"><img class="h-60 mx-auto" src={product.image} alt={product.title}></img></a>
          <div class="px-6 py-4">
            <div><a href={product.id} class="font-bold text-xl mb-2">{product.title}</a></div>
            <p class="text-gray-700 text-base truncate ">{product.description}</p>
            <p class="text-gray-700 text-base">{product.rating.rate} ({product.rating.count} avis)</p>
            <p class="font-bold text-gray-700 text-base">Price : {product.price} €</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">#{product.category}</span>
          </div>
        </div>
      )})}
    </div>
    
  );
}

export default AllProducts;
