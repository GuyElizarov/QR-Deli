import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { cartService } from "../services/cart.service"
import { ProductList } from '../cmps/product-list.jsx'

export function Cart() {

    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(getCart())
    }, [])

    const getCart = () => {
        return cartService.query()
    }

    const navigate = useNavigate()


    const onGoTo = (destination) => {
        navigate(destination)
    }

    if (!cart.length) return <p>Your cart is empty...</p>
    return <section className="cart flex column align-center">
        <ProductList products={cart} />

        <div onClick={() => onGoTo('/confirmation')} className="cart-button">Order Now</div>
    </section>
}