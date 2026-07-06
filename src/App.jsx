import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import CategoryPage from './pages/CategoryPage'
import Collections from './pages/Collections'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Policies from './pages/Policies'
import ProductDetails from './pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'collections', element: <Collections /> },
      { path: 'collections/*', element: <CategoryPage /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'product/:productId', element: <ProductDetails /> },
      { path: 'policies', element: <Policies /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
