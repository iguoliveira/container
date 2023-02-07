import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Areas } from "./pages/Areas"
import { Home } from "./pages/Home"

export const router = createBrowserRouter([
  {
    path: '/',
    element: [
      <>
        <Navbar />
        <Home />
      </>
    ]
  },
  {
    path: '/areas',
    element: [
      <>
        <Navbar />
        <Areas />
      </>
    ],
  }
])

export const App = () => {
  return <RouterProvider router={router} />
}