import React from "react";
export default function Contact() {
    return (
        <>
            <div className="text-dark flex flex-col flex-wrap items-center justify-center p-8 md:p-20">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    conatct section
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
            <form className="mx-auto mb-12 max-w-xs md:max-w-2xl">
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                        Email address
                    </label>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_password"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
                    >
                        Password
                    </label>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="password"
                        name="repeat_password"
                        id="floating_repeat_password"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_repeat_password"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
                    >
                        Confirm password
                    </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="group relative z-0 mb-5 w-full">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
                        >
                            First name
                        </label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
                        >
                            Last name
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="group relative z-0 mb-5 w-full">
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            name="floating_phone"
                            id="floating_phone"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
                        >
                            Phone number (123-456-7890)
                        </label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#1abc9c] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#1abc9c] dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
                        >
                            Company (Ex. Google)
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-[#1abc9c] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#11907a] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#1abc9c] dark:focus:ring-[#11907a] sm:w-auto"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
