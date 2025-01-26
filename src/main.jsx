import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Logout from './pages/Logout.jsx'
import Layout from './Layout.jsx'
import CalculatorPage from './pages/CalculatorPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
      path: "",
      element: <Layout/>,
      children: [
          {
              path: "",
              element: <Register/>
          },
          {
              path: "home",
              element: (
                <ProtectedRoute>
                  <Home /> {/* Protected route */}
                </ProtectedRoute>
              ),
          },
          {
              path: "login",
              element: <Login/>
          },
          {
              path: "logout",
              element: (
                <ProtectedRoute>
                  <Logout /> {/* Protected route */}
                </ProtectedRoute>
              ),
          },
          {
            path: "calculatorPage",
            element: (
              <ProtectedRoute>
                <CalculatorPage /> {/* Protected route */}
              </ProtectedRoute>
            ),
          },
    
      ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
