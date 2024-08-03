import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-96 md:h-[600px]">
            <Carousel slideInterval={5000}>
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                />
            </Carousel>
        </div>
    );
};

export default Hero;
