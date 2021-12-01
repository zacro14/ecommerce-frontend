
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Container, Wrapper } from "./styled_viewproduct"
import SingleProduct from "../../components/singleproduct/SingleProduct"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { publicReq } from "../../BASE_URL"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import TopProducts from "../../components/topProducts/TopProducts"

const ViewProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    
    useEffect(()=>{
        const getProduct = async() => {
            try {
                const res = await publicReq.get(`/products/`+ id)
                setLoading(true)
                setProduct(res.data)
             
           } catch(error) {
                setError(true)
           } 
       }
       getProduct()

       return () =>{
           setLoading(false)
       }
        }, [id])

    useDocumentTitle(`${product.name}-MENS|Corner`)
    return (
       <Container>
           <Navbar />
           <Wrapper>
            { hasError ? 
                <p> not found .... </p> :
                <SingleProduct isLoading= {isLoading} product = {product}/>  
            } 
          </Wrapper>
          <TopProducts />
          <Footer/>
       </Container>
    )
}

export default ViewProduct
