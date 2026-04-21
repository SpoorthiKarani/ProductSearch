import './ProductCard.css';

export const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} width="100" height="100"/>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
    );
};