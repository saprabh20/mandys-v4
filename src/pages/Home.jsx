import React from "react";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import BestSellers from "../components/BestSellers";
import NewArrivals from "../components/NewArrivals";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            {/* <Hero /> */}
            <Quote/>
            <BestSellers/>
            <NewArrivals/>
            <Contact />
        </div>
    );
};

export default Home;
