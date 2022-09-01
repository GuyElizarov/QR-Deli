import { ProductList } from '../cmps/product-list.jsx'

import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { productService } from "../services/prodact.service";


export function Product() {
    const [products, setProducts] = useState([]);
    const location = useLocation()

    useEffect(() => {
        loadProducts()
    },[])

    const loadProducts = async () => {
        const type = location.pathname === '/meat' ? 'meat' : 'dairy'
        const productsToShow = await productService.query(type)
        setProducts(productsToShow)
    }

    if (!products.length) return <h1>Loading...</h1>
    return <ProductList products={products} />
}

