import axios from "axios"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Matches } from "./pages/Matches"
import { Team } from "./pages/Team"

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return axios.get('http://localhost:3000/all-teams').then(data => data.data)
    },
    element: <Home />
  },
  {
    path: "/team/",
    children: [
      {
        path: ":name/:id/",
        element: <Team />,
        loader: async ({ params }) => {
          return axios.get(`http://localhost:3000/team/${params.name}/${params.id}`).then(data => data.data[0])
        }
      },
      {
        path: ':name/:id/matches',
        element: <Matches />,
        loader: async ({ params }) => {
          return axios.get(`http://localhost:3000/match-teams/${params.id}`).then(data => data.data)
        }
      }
    ]
  }
])

export const App = () => {
  return <RouterProvider router={router} />
}