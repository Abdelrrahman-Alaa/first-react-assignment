import React, { useState } from "react";

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => setSelectedImage(null);

    return (
        <>
            <div className="text-dark flex flex-col flex-wrap items-center justify-center p-8 md:p-20">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    portfolio component
                </h1>
                <div>
                    <div className="inline-flex w-full items-center justify-center">
                        <hr className="my-8 h-1 w-64 rounded border-0 bg-slate-950 dark:bg-gray-700" />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4">
                            <i className="fa-solid fa-star text-dark text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mb-6 grid max-w-xs gap-4 md:max-w-xl md:grid-cols-2 lg:mb-12 lg:max-w-screen-xl lg:grid-cols-3">
                {[
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
                ].map((src, index) => (
                    <div key={index}>
                        <img
                            className="h-auto max-w-full cursor-pointer rounded-lg"
                            src={src}
                            alt={`Image ${index + 1}`}
                            onClick={() => setSelectedImage(src)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeModal}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {" "}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-screen-md rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 p-2 text-xl font-bold text-white"
                        >
                            <i class="fa-solid fa-xmark"></i>{" "}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
