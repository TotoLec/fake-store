import React, { useEffect, useState } from 'react';

function AllProductsByCategory(props) {
  let cat = props.cat;

  function getProductsOfCategory(cat){
    fetch('https://fakestoreapi.com/products/category/'+cat)
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setProductsByCat(json))
  }

  const [productsByCat, setProductsByCat] = useState([]);
  useEffect(() => {
    getProductsOfCategory(cat)
  }, [])


  return (
    <div class="flex flex-wrap p-10">
      {productsByCat.map( prod => { return (
        <div class="max-w-xs rounded overflow-hidden shadow-lg min-w-1/4 m-auto mx-2 my-2">
          <a href={prod.id} class="font-bold text-xl mb-2"><img class="h-40 mx-auto" src={prod.image} alt={prod.title}></img></a>
          <div class="px-6 py-4">
            <div><a href={prod.id} class="font-bold text-xl mb-2">{prod.title}</a></div>
            <p class="text-gray-700 text-base truncate ">{prod.description}</p>
            <p class="text-gray-700 text-base">{prod.rating.rate} ({prod.rating.count} avis)</p>
            <p class="font-bold text-gray-700 text-base">Price : {prod.price} €</p>
            <div class="my-5 flex justify-end">
              <button class="rounded-full bg-yellow-300 px-5 py-1">Buy it !</button>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">#{prod.category}</span>
          </div>
        </div>
      )})}
    </div>
    
  );
}

export default AllProductsByCategory;
