import { useEffect } from "react"
import { useState } from "react"

export const ProductPreview = ({ product }) => {

    const [weight, setWeight] = useState(0.1)

    useEffect(() => {
        if (product.weight) setWeight(product.weight)
    },[])

    return <article className="product-preview flex column space-between">
        <div className="content flex">
            <div className="img-container flex center">
                <img src={product.thumbnail} alt="Img" />
            </div>
            <div className="info-container">
                <p> {product.pricePerKg}₪ <small>Per kg</small></p>
                <small> {product.pricePerKg / 10}₪ per 100g</small>
                <h1 className="product-name">{product.name}</h1>
            </div>
        </div>

        <section className="btn-section flex space-between">
            <div className="flex left-section center">
                <button className="weight-btn flex center">+</button>
                <div className="weight">{weight}</div>
                <small> kg </small>
                <button className="weight-btn flex center"> - </button>
            </div>
            <button className="add">Add</button>
        </section>
    </article>
}