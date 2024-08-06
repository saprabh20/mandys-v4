import { Badge, Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { Bounce, Slide, toast } from "react-toastify";
import supabase from "../assets/supabseClient";

const Product = ({ setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.error("Error fetching product:", error);
            } else {
                setProduct(data);
                console.log(data);
            }
        };

        fetchProduct();
    }, [id]);
    return (
        <>
            {product && (
                <section className="py-4 bg-white md:py-16 antialiased">
                    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                            <div className="h-full">
                                <Carousel
                                    slide={false}
                                    className="h-[300px] md:h-full"
                                >
                                    {product.images.map((imgUrl, index) => (
                                        <img
                                            key={index}
                                            className="rounded-none"
                                            src={imgUrl}
                                            alt="..."
                                        />
                                    ))}
                                </Carousel>
                            </div>
                            <div className="mt-6 sm:mt-8 lg:mt-0">
                                <h1 className="text-2xl font-semibold md:text-4xl md:font-extrabold">
                                    {product.name}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <div className="flex items-center">
                                        <p className="text-2xl mr-4 font-semibold text-gray-900 sm:text-3xl">
                                            {product.price}
                                        </p>
                                        <p className="text-2xl mr-4 font-normal line-through text-gray-400 sm:text-2xl">
                                            {product.compare_at_price}
                                        </p>
                                        {product.stock_quantity > 0 ? (
                                            <Badge color={"success"}>
                                                In-Stock
                                            </Badge>
                                        ) : (
                                            <Badge color={"failure"}>
                                                Out-of-stock
                                            </Badge>
                                        )}
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
                                <p className="mb-2 text-gray-900 text-base">
                                    {product.description}
                                </p>
                                <p className="mb-2 text-gray-800 text-sm">
                                    {product.features}
                                </p>
                                <p className="mb-2 text-gray-700 text-sm">
                                    {product.dimensions}
                                </p>
                                <p className="mb-2 text-gray-600 text-sm">
                                    {product.care_instructions}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Product;
