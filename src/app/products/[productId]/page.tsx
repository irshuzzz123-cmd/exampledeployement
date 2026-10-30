import React from 'react'
import { ProductService } from '@/app/services/product-services'
async function ProductDetails(props:any) {
    const params=await props.params
    const productId=params.productId
    if(productId){
        var product=await ProductService.getProductById(productId)
    }


  return (
    <div>
        <img src={product.images[0]} width={89}alt="" />
        <h3>{product.title}</h3>
    </div>
  )
}

export default ProductDetails