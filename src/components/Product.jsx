import React, { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { Bounce, Slide, toast } from "react-toastify";

const Product = ({setCart}) => {
    const [product, setProduct] = useState({})
    return (
        <section className="py-8 bg-white md:py-16 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img
                            className="w-full"
                            src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMikucG5nIiwiaWF0IjoxNzIyNTg4NzM3LCJleHAiOjE3NTQxMjQ3Mzd9.CCJfL5D8sorJwi0LEpmsTvbFAZKHyIZ-al5sw-2-PVU&t=2024-08-02T08%3A52%3A14.663Z"
                            alt=""
                        />
                    </div>
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-2xl font-semibold md:text-4xl md:font-extrabold">
                            Margharita Glass
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <div className="flex items-center">
                                <p className="text-2xl mr-4 font-bold text-gray-900 sm:text-3xl">
                                    Rs.124
                                </p>
                                <p className="text-2xl font-semibold line-through text-gray-400 sm:text-2xl">
                                    Rs.200
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <button
                                title=""
                                onClick={() => {
                                    setCart((oldArray) => [
                                        ...oldArray,
                                        product,
                                    ]);
                                    toast.success("Added to cart", {
                                        position: "bottom-center",
                                        autoClose: 1000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        transition: Bounce,
                                    });
                                }}
                                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
                                role="button"
                            >
                                <div className="pr-2">
                                    <FaCartShopping />
                                </div>
                                Add to cart
                            </button>
                        </div>
                        <hr className="my-6 md:my-8 border-gray-200" />
                        <p className="mb-6 text-gray-500">
                            Elevate your style with these mesmerizing emerald
                            cut drop earrings. Crafted with meticulous attention
                            to detail, the earrings feature a captivating blend
                            of [metal] and [gemstone]. The elongated emerald cut
                            gemstones dance with light, creating a mesmerizing
                            shimmer. Perfect for both day and night, these
                            earrings are a timeless addition to your jewelry
                            collection.
                        </p>
                        <p className="text-gray-500">
                            Indulge in the luxury of these exquisite earrings,
                            whether you're dressing up for a special occasion or
                            adding a touch of glamour to your everyday look. The
                            elegant drop design and the radiant gemstones make
                            these earrings a statement piece that will turn
                            heads.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
