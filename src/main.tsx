import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackError from "./pages/FallbackError.tsx"
import Home from './pages/Home.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/react",
    element: <App />,
  },
  {
    path: "*",
    element: <FallbackError error={{
      message:
        "Page not found"
    }} />,
  }

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={FallbackError}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
