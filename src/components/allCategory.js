import React, { useEffect, useState } from 'react';
import AllProductsByCategory from './allProductsByCategory.js';

function AllCategory() {

  function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setCategories(json))
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
    
  }, [])


  return (
    <div class="">
      <br />
      {categories.map( category => { return (
        <div>
          <h3 class="font-bold pl-12 text-2xl capitalize underline">{category} :</h3>
          <AllProductsByCategory cat={category} />
          <br />
        </div>
      )})}
    </div>
    
  );
}

export default AllCategory;
