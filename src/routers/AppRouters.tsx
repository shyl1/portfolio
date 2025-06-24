import Error from "@pages/Error";
import MainLayout from "@UI/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {

      },
    ],
  }

]);


export default function AppRouters() {
  return (
    <RouterProvider router={router}/>
  )
}
