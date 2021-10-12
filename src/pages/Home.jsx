import { lazy, Suspense } from "react"
//import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';
import  Slider  from '../components/slides/Slider';
import { CircularProgress } from "@mui/material";

const Products = lazy(() => import('../components/Products'));
const renderLoader = () => <CircularProgress/>



export const Home = () => {
    return (
        <div>
            <Suspense fallback={renderLoader()}>
                {/* <Announcement/>          */}
                <Navbar/>
                <Slider/>
                <Categories/> 
                <Products/>
                <Newsletter/>
                <Footer/>
            </Suspense>
        </div>
    )
}

export default Home;