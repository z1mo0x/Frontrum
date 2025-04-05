import { React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profiles from './pages/ProfilesPage/Profiles.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import Forum from './pages/Forum/Forum.jsx'

const root = document.getElementById('root');



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profiles',
    element: <Profiles />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfilePage />
      },
    ]
  },
  {
    path: '/forum',
    element: <Forum />
  }

]);


createRoot(root).render(
  <RouterProvider router={router} />
)
