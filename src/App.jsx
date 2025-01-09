import { createHashRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
    let routers = createHashRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "portfolio", element: <Portfolio /> },
                { path: "contact", element: <Contact /> },
                { path: "about", element: <About /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routers} />
        </>
    );
}

export default App;
