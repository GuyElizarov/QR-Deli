import { useNavigate } from "react-router"

export function HomePage() {
    const navigate = useNavigate()


    const onGoTo = (destination) => {
        navigate(destination)
    }

    return <section className="home-page flex column align-center">
        <div onClick={()=>onGoTo('dairy')} className="home-button">Dairy Section</div>
        <div onClick={()=>onGoTo('meat')} className="home-button">Meats Section</div>
        <div onClick={()=>onGoTo('cart')} className="home-button">Checkout</div>
    </section>
    
}