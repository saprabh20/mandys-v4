import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-96 md:h-[600px] flex items-center justify-center">
            <Carousel className="rounded-none" slideInterval={3000}>
                <img
                    className="rounded-none"
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMSkucG5nIiwiaWF0IjoxNzIyNTg4NjQ4LCJleHAiOjE3NTQxMjQ2NDh9.wchcFSUoS_uEw74ysAHXbnruU_6KCNX9oyYj1kKix6c&t=2024-08-02T08%3A50%3A45.710Z"
                    alt="..."
                />
                <img
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(14).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMTQpLnBuZyIsImlhdCI6MTcyMjU4ODcwNCwiZXhwIjoxNzU0MTI0NzA0fQ.mCbORhNznXiQXEoo2m_x3ld2O1tfVO5QJsv1C8D5MrA&t=2024-08-02T08%3A51%3A41.282Z"
                    alt="..."
                />
                <img
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/Handicraft%20Janpath/cropped-image%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9IYW5kaWNyYWZ0IEphbnBhdGgvY3JvcHBlZC1pbWFnZSAoMikucG5nIiwiaWF0IjoxNzIyNTg4NzM3LCJleHAiOjE3NTQxMjQ3Mzd9.CCJfL5D8sorJwi0LEpmsTvbFAZKHyIZ-al5sw-2-PVU&t=2024-08-02T08%3A52%3A14.663Z"
                    alt="..."
                />
                <img
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/pball.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9wYmFsbC5qcGciLCJpYXQiOjE3MjI3MTAyNDYsImV4cCI6MTc1NDI0NjI0Nn0.awsgS4_X-6asCDrlHL6hwnDbguoQ5VplmybJ7xwZb1E&t=2024-08-03T18%3A37%3A22.850Z"
                    alt="..."
                />
                <img
                    src="https://stjrdjxugpuvmvhqobik.supabase.co/storage/v1/object/sign/products/pball.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9wYmFsbC5qcGciLCJpYXQiOjE3MjI3MTAyNDYsImV4cCI6MTc1NDI0NjI0Nn0.awsgS4_X-6asCDrlHL6hwnDbguoQ5VplmybJ7xwZb1E&t=2024-08-03T18%3A37%3A22.850Z"
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
