

"use client";

 import Image from 'next/image'
 
 import { allProducts } from '@/sanity/lib/quries';

import { Product } from '../studio/products';

 import { addToCart } from '../cards/cards';

 import React ,{useEffect, useState} from "react";


import { client } from '@/sanity/lib/client';
   import { urlFor } from '@/sanity/lib/image';
   import Link from 'next/link';

import Swal from 'sweetalert2';


  const Fetchdata = () => {

 const [ products , setProducts] = useState<Product[]>([])
 useEffect(() =>{
  async function  fetchProduct() {
  const fetchProduct:Product []=await client.fetch(allProducts)
      setProducts(fetchProduct)
     }
  fetchProduct()
 },[]);



const handleAddTocart =(e:React.MouseEvent, product:Product)=>{
       e.preventDefault()
     Swal.fire({
       position:"top-right",
      icon:"success",
      title:`${product.title} added to cart`,
      showConfirmButton:false,
       timer:1000
      
    })
      addToCart(product)
//     // // //  alert("ok")
//     // // // console.log(handleAddTocart)
      }
    
  return (
    <main>
      
    <div className='max-w-7xl max-auto ml-10 px-4 py-10'>
             <h1 className='-2xl font-bold mb-6 text-center'>our latest product</h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8'>
      {products.map((products) =>(
        <div 
        key={products._id}
        className='border  rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
         <Link href={`/product/${products?.slug?.current ||""}`}>
          {products.image &&(
            <Image 
            src={ urlFor(products.image).url()}
             alt={products.title}
            width={300}
             height={300}
          className=' w-full h-48 object-cover rounded-md' />
        )}
          <h2 className='text-lg font-semibold mt-4'>{products.title}</h2>
         <p className='text-gray-500 mt-2'>{products.price ?`$${products.price}` :"price not available"}</p>
        
          <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white  font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
          hover:scale-110 transition-transform duration-300 ease-in-out
            
        '
        onClick={(e) => handleAddTocart(e,products)}
          >
          AddTocart
          </button>  
          

         </Link>
                 
                    </div>

      ))};
       

     </div>
      
   
         
 </div> 
     
      
     
    
      
   </main>
   )
   }
    export default Fetchdata;

