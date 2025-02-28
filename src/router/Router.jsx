import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import NotFound from '../pages/NotFound'

export default function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/products" element={<Products />} />                    
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
