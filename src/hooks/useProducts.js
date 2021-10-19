
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';

export const useProduct = () => {
   
    const ctx = useContext(ProductsContext)

    return {
        ...ctx
    }
}