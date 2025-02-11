   import React from "react"
   import ReactDOM from "react-dom/client"
   import Header from "./Components/Header"
   import Footer from "./Components/Footer"
   import Body  from "./Components/Body"
   import About from "./Components/About"
   import ErrorPage from "./Components/ErrorPage"
   import Contact from "./Components/Contact"
   import RestaurantDetails from "./Components/RestaurantDetails"
  import { createBrowserRouter,RouterProvider,Outlet} from "react-router";
import Profile from "./Components/Profile"
 
  const AppLayout=()=>(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
const router=createBrowserRouter([
{
element:<AppLayout/>,
errorElement:<ErrorPage/>,
children :[
  {
    path:"/",
    element:<Body/>
  },
  {
  path:"/about",
  element:<About/>,
  // children:[
  //  { path:"profile",
  //   element:<Profile/>
  //  }
  // ]
},
{
  path:"/contact",
  element:<Contact/>
},
{
  path:"/restaurant/:id",
  element:<RestaurantDetails/>
}
]
}
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <RouterProvider router={router}></RouterProvider>
  );
