import { lazy, Suspense } from "react"
//import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';
import  Slider  from '../components/slides/Slider';
import { CircularProgress } from "@mui/material";
import useDocumentTitle from "../hooks/useDocumentTitle"
import styled from "styled-components/macro"
const TopProducts = lazy(() => import('../components/topProducts/TopProducts'));
const renderLoader = () => <CircularProgress/>

const Main = styled.main`
    scroll-behavior: smooth;
    background-color: #F5F5F5;
`;

export const Home = () => {
    useDocumentTitle();
    return (
        <Main>
            <Suspense fallback={renderLoader()}>
                {/* <Announcement/>          */}
                <Navbar />
                <Slider/>
                <Categories/> 
                <TopProducts/>
                <Newsletter/>
                <Footer/>
            </Suspense>
        </Main>
    )
}

export default Home;