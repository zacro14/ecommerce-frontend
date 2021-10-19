import { createContext, useState } from "react"
import { ProductItem } from "../data"
export const ProductsContext = createContext()


const ProductContextProvider = ({children}) =>  {
    const [products] = useState(ProductItem)

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}

export default ProductContextProvider