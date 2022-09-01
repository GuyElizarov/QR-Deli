import { useLocation, useNavigate } from 'react-router'

import cartIcon from '../assets/img/shopping_cart.svg'
import logo from '../assets/img/Logo.png'

export function AppHeader() {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoTo = (destination) => {
        navigate(destination)
    }

    return (
        <section className="full app-header flex space-between">
            <img src={logo} alt="Logo" />
            {(location.pathname !== '/login') && <img onClick={() => onGoTo('/cart')} className='cart-icon' src={cartIcon} alt="Cart" />}
        </section>
    )
}