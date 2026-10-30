"use client"
import React, { use } from 'react'
import './product-card.css'

import { useState } from 'react'
import Link from 'next/link'




function ProductCard(props:any) {
    const prod=props.product
    const[selectProduct,setSelectProduct]=useState({})

    const selectProd=()=>{
        console.log("selected product",prod)
        setSelectProduct(prod)
    }
  return (

    <Link href={'/products/'+prod.id}>
    <div onClick={selectProd} className='prod-container'>

        <div className='image-div'>
            <img src={prod.images} alt="" width={50}/>

        </div>
            
            <div className='prod-title'>
                 {prod.title}
            </div>
           
        
    </div>

    </Link>
  )
}

export default ProductCard