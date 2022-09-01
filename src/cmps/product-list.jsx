import { ProductPreview } from "../cmps/product-preview.jsx";

export const ProductList = ({ products }) => {
    return <div className=" flex column product-list">
        {products.map((product, idx) => <ProductPreview key={idx} product={product} />)}
    </div>
}