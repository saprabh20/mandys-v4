import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../assets/supabseClient";

const Hero = () => {
    // const [carouselImages, setCarouselImages] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data, error } = await supabase.storage.from("images").list("hero");

    //         if (error) {
    //             console.error("Error fetching products:", error);
    //         } else {
    //             // setCarouselImages(...carouselImages, data);
    //             console.log(data);
    //         }
    //     };

    //     fetchProducts();
    // }, []);
    return (
        <div className="h-96 md:h-[600px] flex items-center justify-center">
            <Carousel className="rounded-none" slideInterval={3000}>
                <img
                    className="rounded-none"
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/public/images/hero/margarita1.png"
                    alt="..."
                />
                <img
                    className="rounded-none"
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/public/images/hero/circleorange4.png"
                    alt="..."
                />
                <img
                    className="rounded-none"
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/public/images/hero/bigmix1.png"
                    alt="..."
                />
                <img
                    className="rounded-none"
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/public/images/hero/smiley1.png"
                    alt="..."
                />
                <img
                    className="rounded-none"
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/public/images/hero/circleblue3.png"
                    alt="..."
                />
            </Carousel>
            <div className="w-56 md:w-[600px] lg:w-[700px] absolute flex justify-center items-center flex-col text-3xl md:text-5xl font-semibold md:font-bold text-white">
                <div className="mb-8 font-extrabold text-center">
                    Elevate Your Style: Explore Our Exclusive Jewellery
                    Collections
                </div>
                <Link
                    to={"/products"}
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-semibold rounded-full text-base px-5 py-2.5 me-2 mb-2"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Hero;
