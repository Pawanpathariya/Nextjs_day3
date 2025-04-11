"use client"
import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useSearchParams } from 'next/navigation'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Image from 'next/image'
const page = () => {
  const searchParams = useSearchParams();
const id = searchParams.get("id");
console.log(id)
    const [product, setProduct] = useState({});
  
      useEffect(() => {
        loadData();
      }, []);


      const loadData = async () => {
        const api = `/api/search?id=${id}`;
        const response = await axios.get(api);
        setProduct(response.data.product)
      }
    


  return (
    <>
    <Header/>



    <div className="p-4 bg-white shadow rounded-lg">
  <h2 className="text-xl font-bold mb-2">Product Name : {product.name}</h2>
  <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
  <p className="text-gray-700 mb-1">Price: {product.price}</p>
  {product.imageurl && (
    <div className="mt-4">
     <img src={product.imageurl} alt='home' width={100} height={30} />
    </div>
  )}
</div>


    <Footer/>
    </>
  )
}

export default page