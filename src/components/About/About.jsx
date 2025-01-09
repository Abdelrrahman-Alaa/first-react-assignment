import React from "react";

export default function About() {
    return (
        <>
            <div className="flex flex-col flex-wrap items-center justify-center bg-[#1abc9c] p-8 text-white md:p-20">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    about component
                </h1>
                <div>
                    <div className="inline-flex w-full items-center justify-center">
                        <hr className="my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700" />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-[#1abc9c] px-4">
                            <i className="fa-solid fa-star text-xl text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="grid gap-12 md:grid-cols-2 lg:py-6">
                    <p className="md:text-lg">
                        Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files
                        including HTML, CSS, and JavaScript as well as optional
                        SASS stylesheets for easy customization.
                    </p>
                    <p className="md:text-lg">
                        Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files
                        including HTML, CSS, and JavaScript as well as optional
                        SASS stylesheets for easy customization.
                    </p>
                </div>
            </div>
        </>
    );
}
