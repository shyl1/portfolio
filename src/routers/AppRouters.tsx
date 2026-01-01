import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "@pages/Error";
import MultipleChoices from "@pages/MultipleChoices";
import Rewending from "@pages/Rewending";
import MainLayout from "@UI/MainLayout";
import { LoadingProvider } from "@ContextAPI/LoadingContext";
import AboutBook from "@pages/books/AboutBook/Book";
import ContactBook from "@pages/books/ContactBook/Book";
import ProjectBook from "@pages/books/ProjectBook/Book";
import HobbiesBook from "@pages/books/HobbiesBook/Book";




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
        path: 'choosing',
        element: <MultipleChoices />,
      },
      {
        path: 'book/about',
        element: <AboutBook />,
      },
      {
        path: 'book/contact',
        element: <ContactBook />
      },
      {
        path: 'book/projects',
        element: <ProjectBook />,
      },
      {
        path: 'bppk/hobbies',
        element: <HobbiesBook />
      },
    ],
  },
]);


export default function AppRouters() {
  return (
    <LoadingProvider >
      <RouterProvider router={router}/>
    </LoadingProvider>
  )
}
