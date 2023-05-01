import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      Children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
    },
  ]);

  export default router;