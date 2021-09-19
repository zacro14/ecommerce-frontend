import React from 'react'
//import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import Products from '../components/Products';
import  Slider  from '../components/slides/Slider';

export const Home = () => {
    return (
        <div>
            {/* <Announcement/> */}
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home;