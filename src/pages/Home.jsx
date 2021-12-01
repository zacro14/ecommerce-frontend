import { lazy, Suspense } from "react"
import Categories from '../components/Categories';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';
import  Slider  from '../components/slides/Slider';
import { CircularProgress } from "@mui/material";
import useDocumentTitle from "../hooks/useDocumentTitle"
import styled from "styled-components/macro"
import Navbar from "../components/navbar/Navbar";
const TopProducts = lazy(() => import('../components/topProducts/TopProducts'));
const renderLoader = () => <CircularProgress/>

const Main = styled.main`
    position: relative;
    scroll-behavior: smooth;
`;

export const Home = () => {
    useDocumentTitle();
    return (
   
            <Suspense fallback={renderLoader()}>
               
                <Main >
                <Navbar/>
                    <Slider/>
                    <Categories/> 
                    <TopProducts/>
                    <Newsletter/>
                    <Footer/>
                </Main>
            </Suspense>
        
    )
}

export default Home;