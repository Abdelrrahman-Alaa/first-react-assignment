import React from "react";
import { useState } from "react";

export default function Parent() {
    const [products, setProducts] = useState([
        {
            id: 123,
            code: "toshiba",
            price: 15000,
            category: "TV",
            isSale: false,
            count: 25,
        },
        {
            id: 124,
            code: "Samsung",
            price: 15002,
            category: "Mobile",
            isSale: true,
            count: 252,
        },
        {
            id: 125,
            code: "Keriazi",
            price: 159854,
            category: "Freezer",
            isSale: false,
            count: 59,
        },
        {
            id: 126,
            code: "LG",
            price: 15000,
            category: "TV",
            isSale: true,
            count: 651,
        },
        {
            id: 127,
            code: "Apple",
            price: 15641,
            category: "Phone",
            isSale: false,
            count: 541,
        },
        {
            id: 128,
            code: "Kiri",
            price: 6416,
            category: "Cheese",
            isSale: true,
            count: 514,
        },
        {
            id: 129,
            code: "Realme",
            price: 65489,
            category: "Phone",
            isSale: false,
            count: 548,
        },
        {
            id: 121,
            code: "Nokia",
            price: 65498,
            category: "Phone",
            isSale: true,
            count: 541,
        },
    ]);

    function dleteProduct(id) {
        // Deep copy
        let newProducts = structuredClone(products);

        // Update state
        newProducts = newProducts.filter((product) => product.id != id);

        // Set state
        setProducts(newProducts);
    }

    function updateProdut(index) {
        let newProducts = structuredClone(products);
        newProducts[index].count++;
        setProducts(newProducts);
    }

    return (
        <>
            <div className="container bg-secondary">
                <div className="row g-3 my-3">
                    {products.map(function (product, index) {
                        return (
                            <Child
                                key={index}
                                productsDetails={product}
                                index={index}
                                updateProdut={updateProdut}
                                dleteProduct={dleteProduct}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
