import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="border-gray-200 bg-white dark:bg-gray-900">
            <div className="bg-slate-700 p-4 md:p-10">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    <NavLink
                        to=""
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="whitespace-nowrap text-lg md:text-3xl font-bold uppercase text-white">
                            Start framework
                        </span>
                    </NavLink>
                    <button
                        id="toggle-btn"
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
                            <li>
                                <NavLink
                                    to="about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block rounded bg-[#1abc9c] px-3 py-2 text-lg font-bold uppercase text-white md:p-2"
                                            : "block rounded px-3 py-2 text-lg font-bold uppercase text-gray-900 hover:bg-gray-100 md:p-2 md:text-white md:hover:bg-transparent"
                                    }
                                    aria-current="page"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="portfolio"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block rounded bg-[#1abc9c] px-3 py-2 text-lg font-bold uppercase text-white md:p-2"
                                            : "block rounded px-3 py-2 text-lg font-bold uppercase text-gray-900 hover:bg-gray-100 md:p-2 md:text-white md:hover:bg-transparent"
                                    }
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block rounded bg-[#1abc9c] px-3 py-2 text-lg font-bold uppercase text-white md:p-2"
                                            : "block rounded px-3 py-2 text-lg font-bold uppercase text-gray-900 hover:bg-gray-100 md:p-2 md:text-white md:hover:bg-transparent"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
