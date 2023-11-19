import { type FunctionComponent } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import styled from 'styled-components'
import { appStyles } from './AppStyles'
import { PortfolioContextProvider } from './components/context/PortfolioContextProvider'
import { Header } from './components/layout/header/Header'
import { Contact } from './routes/Contact'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { Project } from './routes/Project'
import { ProjectDemo } from './routes/ProjectDemo'
import { Register } from './routes/Register'

const AppStyled = styled.div`${appStyles}`

const router = createBrowserRouter([
  {
    element: (
      <PortfolioContextProvider>
        <AppStyled>
          <Header />
          <Outlet />
        </AppStyled>
      </PortfolioContextProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: ':filter',
            element: <Home />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/project/:projectId',
        element: <Project />
      },
      {
        path: '/project/:projectId/demo',
        element: <ProjectDemo />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

export const App: FunctionComponent = () => <RouterProvider router={router} />
