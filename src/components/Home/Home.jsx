/* import { useEffect, useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./Home.module.css";
export default function Home() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        let {
            data: { data },
        } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
        setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {!products.length ? (
                <div className="container flex h-screen items-center justify-center">
                    <i className="fa-solid fa-spinner fa-spin fa-6x"></i>{" "}
                </div>
            ) : (
                <div className="container m-auto w-4/5">
                    <div className="flex flex-wrap">
                        {products.map((product) => (
                            <div className="w-1/4 p-3" key={product.id}>
                                <div className="inner">
                                    <img
                                        className="w-full"
                                        src={product.imageCover}
                                        alt={product.slug}
                                    />
                                    <h3
                                        className={`text-center ${style["clr-tomato"]}`}
                                    >
                                        {product.title
                                            .split(" ")
                                            .splice(0, 2)
                                            .join(" ")}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
 */

import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col flex-wrap items-center justify-center bg-[#1abc9c] p-8 text-white md:p-20">
                <img
                    src="src\assets\avataaars.svg"
                    className="mb-6 w-44 md:w-64"
                    alt="avatar"
                />
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    start Framework
                </h1>
                <div>
                    <div className="inline-flex w-full items-center justify-center">
                        <hr className="my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700" />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-[#1abc9c] px-4">
                            <i className="fa-solid fa-star text-xl text-white"></i>
                        </div>
                    </div>
                </div>
                <p className="md:text-lg">
                    Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
        </>
    );
}
