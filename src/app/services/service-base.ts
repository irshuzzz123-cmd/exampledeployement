import React from 'react'

 export  class ServiceBase {
    static API_URL="https://dummyjson.com"

    static getUrl(path:string):string{
        return `${this.API_URL}${path}`
    }
  
}

