export default function Footer() {
    return (
        <footer className="bg-slate-700 text-white">
            <div className="mx-auto w-full">
                <div className="mx-auto grid max-w-sm gap-12 px-4 py-6 text-center md:max-w-screen-xl md:grid-cols-3 md:py-24">
                    <div className="mx-auto">
                        <h2 className="mb-6 text-2xl font-semibold uppercase md:text-3xl">
                            LOCATION
                        </h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="mx-auto">
                        <h2 className="mb-6 text-2xl font-semibold uppercase md:text-3xl">
                            AROUND THE WEB
                        </h2>
                        <ul className="flex items-center justify-center font-medium text-gray-500 dark:text-gray-400">
                            <li className="mx-2">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border p-2"
                                >
                                    <i class="fa-brands fa-facebook text-white"></i>{" "}
                                </a>
                            </li>
                            <li className="mx-2">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border p-2"
                                >
                                    <i class="fa-brands fa-twitter text-white"></i>{" "}
                                </a>
                            </li>
                            <li className="mx-2">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border p-2"
                                >
                                    <i class="fa-brands fa-linkedin text-white"></i>{" "}
                                </a>
                            </li>
                            <li className="mx-2">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border p-2"
                                >
                                    <i class="fa-solid fa-globe text-white"></i>{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto">
                        <h2 className="mb-6 text-2xl font-semibold uppercase md:text-3xl">
                            ABOUT FREELANCER
                        </h2>
                        <p>
                            Freelance is a free to use, <br /> licensed
                            Bootstrap theme created by Abdelrahman
                        </p>
                    </div>
                </div>
                <div className="bg-slate-900 px-4 py-6 text-center">
                    <span className="sm:text-center">
                        Copyright © Your Website 2021
                    </span>
                </div>
            </div>
        </footer>
    );
}
