import React, { useEffect, useState } from "react";
import supabase from "../assets/supabseClient";
import { useNavigate } from "react-router-dom";
import { Badge } from "flowbite-react";

const Products = ({ products, setProducts }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch products from API
        const fetchProducts = async () => {
            const { data, error } = await supabase.from("products").select("*");

            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProducts(data);
                setIsLoading(false);
            }
        };
        setIsLoading(true);
        fetchProducts();
    }, []);

    return (
        <div className="py-6">
            <div className="px-4 pb-4 text-2xl font-semibold md:text-3xl md:font-bold md:px-32 text-center">
                All Products
            </div>
            <div className="grid grid-cols-2 px-4 gap-4 md:grid-cols-4 md:gap-6 md:px-32">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-lg border border-gray-200 shadow-xm hover:shadow-xl"
                        onClick={() => {
                            navigate(`${product.id}`);
                        }}
                    >
                        <div>
                            <img
                                className="rounded-t-lg"
                                src={product.images[0]}
                            />
                            <div className="pl-2">
                                <div className="py-2 text-lg">
                                    {product.name}
                                </div>
                                <div className="text-slate-900 text-sm pb-2 flex">
                                    <div className="mr-2">{product.price}</div>
                                    <div className="text-gray-400 line-through mr-2">
                                        {product.compare_at_price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
