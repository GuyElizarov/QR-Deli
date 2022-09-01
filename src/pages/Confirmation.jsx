import { useState } from "react"
import { useEffect } from "react"
import { cartService } from "../services/cart.service"
import { orderService } from "../services/orde.service"

export const Confirmation = () => {
    const [orderInfo, setOrderInfo] = useState({})
    useEffect(() => {
        setOrderInfo(getOrderInfo())
    }, [])


    const getOrderInfo = () => {
        return orderService.getLoggedinUser()
    }


    return <div className="confirmation-container flex column center">
        <h3>Great , we started working on your order</h3>
        <div className="confirmation flex column ">
            <p>Hi {orderInfo.fullName},</p>
            <p>Your total order price is : {cartService.calcPrice()}₪</p>
            <p>Your order number is : </p>
            <p> {orderInfo.orderNum}</p>
        </div>
    </div>
}