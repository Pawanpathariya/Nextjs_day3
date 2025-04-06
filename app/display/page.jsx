'use client'
import React, { Suspense } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Loading from './loading'
const page = () => {
const router=useRouter();
  useEffect(() => {
    loadData();
  }, []);

  const [product, setProduct] = useState([]);

  const loadData = async () => {
    try {
      const api = "/api/product";
      const response = await axios.get(api);
      const data = response?.data?.data;
      setProduct(data);
      console.log(response.data.data);
    
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />    
      <div>

      <Suspense fallback={<Loading/>} >
        <table  className='w-full'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Price</th>
              <th>Product Image</th>
            </tr>
          </thead>
          <tbody>
            {
              product.map((data2) => (
                <tr key={data2._id} className="border-b border-gray-300" >
                  <td className="px-4 py-2">{data2.name}</td>
                  <td className="px-4 py-2">{data2.brand}</td>
                  <td className="px-4 py-2">{data2.price}</td>
                  <td onClick={() => router.push(`/product?id=${data2._id}`)}>
                    {data2.imageurl && (
                      <img src={data2.imageurl} alt="home" width={100} height={30} />
                    )}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Suspense>


      </div>
      <Footer />
    </>
  )
}

export default page

