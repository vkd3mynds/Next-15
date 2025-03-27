import React from 'react'

type Props = {}

export default async function ProductDetails  ({params}:{params :Promise<{productId : string}>}) {

    const producId = (await params).productId 
  return (
   <div>
     <h1>Details about Product {producId}</h1>
   </div>
  )
}