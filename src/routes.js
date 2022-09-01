import { HomePage } from './pages/home-page.jsx'
import { Product } from './pages/Product.jsx'
import { Confirmation } from './pages/Confirmation.jsx'
import { Cart } from './pages/Cart.jsx'
import { Login } from './pages/Login.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: 'dairy',
        component: <Product />,
    },
    {
        path: 'meat',
        component: <Product />,
    },
    {
        path: 'cart',
        component: <Cart />,
    },
    {
        path: 'confirmation',
        component: < Confirmation />,
    },
    {
        path: 'login',
        component: < Login />,
    },
]

export default routes;