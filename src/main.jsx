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
import UserContextProvider from './context/UserContextProvider.jsx'
import LoanRequest from './pages/LoanRequest.jsx'
import AfterLoginRoute from './components/AfterLoginRoute.jsx'
import Services from './pages/Services.jsx'
import PayHere from './pages/PayHere.jsx'

const router = createBrowserRouter([
  {
      path: "",
      element: <Layout/>,
      children: [
          {
              path: "",
              element:
                <Home/>
          },
          {
              path: "register",
              element:
              <AfterLoginRoute><Register/></AfterLoginRoute>
          },
          {
              path: "login",
              element: <AfterLoginRoute><Login/></AfterLoginRoute>
          },
          {
              path: "logout",
              element: <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
          },
          {
            path: "Guarantor",
            element: <ProtectedRoute><CalculatorPage /></ProtectedRoute>
          },
          {
            path: "loanRequest",
            element: <ProtectedRoute><LoanRequest/></ProtectedRoute>
          },
          {
            path: "services",
            element: <Services/>
          },
          {
            path: "payHere",
            element: <PayHere/>
          },
    
      ]
  }
])


createRoot(document.getElementById('root')).render(
  <UserContextProvider>
     <RouterProvider router={router}>
     </RouterProvider>
  </UserContextProvider>
 
)
