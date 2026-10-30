import React from "react";
import ProductCard from "../components/product-card/ProductCard";
import './product-container.css'
import { ProductService } from "../services/product-services";

async function getProducts() {
  const response = await ProductService.getProduct();
  // const data = await response.json();
  // return data.products;
  return response
}

export default async function products() {
  console.log("products page executed");
  const products = await getProducts();

  return (
    <div>
      <h2>product list</h2>
      <div className="container">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
