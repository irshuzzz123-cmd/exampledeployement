import { ServiceBase } from "./service-base";

 export class ProductService extends ServiceBase {
    static getProduct=async()=>{
        const productResp=await fetch(this.getUrl('/products'))
        const data=await productResp.json()
        return data.products
        
    }

     static getProductById=async(id:number)=>{
        const productResp=await fetch(this.getUrl(`/products/${id}`))
        const data=await productResp.json()
        return data
        
    }


}