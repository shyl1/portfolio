import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@pages/Error";
import MultipleChoices from "@pages/MultipleChoices";
import Rewending from "@pages/Rewending";
import MainLayout from "@UI/MainLayout";
import AboutMe from "@pages/AboutMe";
import Contact from "@pages/Contact";




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Rewending />,
      },
      {
        path: 'Choosing',
        element: <MultipleChoices />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
]);


export default function AppRouters() {
  return (
    <RouterProvider router={router}/>
  )
}
