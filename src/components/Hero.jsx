import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <div
                id="default-carousel"
                className="relative w-full"
                data-carousel="slide"
            >
                {/* Carousel wrapper */}
                <div className="relative h-96 overflow-hidden md:h-[650px]">
                    {/* Item 1 */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMSkucG5nIiwiaWF0IjoxNzIyNTg4NjQ4LCJleHAiOjE3NTQxMjQ2NDh9.wchcFSUoS_uEw74ysAHXbnruU_6KCNX9oyYj1kKix6c&t=2024-08-02T08%3A50%3A45.710Z"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 2 */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(14).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMTQpLnBuZyIsImlhdCI6MTcyMjU4ODcwNCwiZXhwIjoxNzU0MTI0NzA0fQ.mCbORhNznXiQXEoo2m_x3ld2O1tfVO5QJsv1C8D5MrA&t=2024-08-02T08%3A51%3A41.282Z"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 3 */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMikucG5nIiwiaWF0IjoxNzIyNTg4NzM3LCJleHAiOjE3NTQxMjQ3Mzd9.CCJfL5D8sorJwi0LEpmsTvbFAZKHyIZ-al5sw-2-PVU&t=2024-08-02T08%3A52%3A14.663Z"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-40 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to={0}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to={1}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to={2}
                    />
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="absolute flex justify-center items-center flex-col z-30 text-3xl md:text-5xl font-semibold md:font-bold text-white">
                <div className="mb-8 px-12 md:px-48 font-extrabold text-center">
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
