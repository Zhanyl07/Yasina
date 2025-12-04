import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Skils from "./pages/Skils";
// import Featute from "./pages/Feature";
const myRouter = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "",
                    element:<Home/>
                },            
                {
                    path:"blog",
                    element: <Blog/>
                },
                {
                     path:"contact",
                    element: <Contact/>
                },
                {
                      path:"works",
                    element: <Work/>

                },
                {
                    path:"skils",
                    element:<Skils/>
                }
                
            ]

        }
    ])

export default myRouter