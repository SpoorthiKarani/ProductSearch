import { ProductCard } from "./ProductCard";
import './ProductList.css';

export const ProductList = ({ products }) => {
    if (!products?.length) return <p>No products found</p>;

    return (
        <div className="product-list">
            {products?.map(product => (
                <ProductCard key={product?.id} product={product} />
            ))}
        </div>
    );
};