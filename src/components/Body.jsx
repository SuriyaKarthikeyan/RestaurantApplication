import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Cart from './Cart.jsx';
import WishList from './WishList.jsx';
import Orders from './Orders.jsx';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
const Body = () => {
     const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/wishlist",
            element: <WishList />
        },
        {
            path: "/orders",
            element: <Orders />
        }
      ]);

    return (
        <>
           <RouterProvider  router = {appRouter} /> 
        </>
    )};
export default Body;