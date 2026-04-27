import './ProductCard.css';

export const ProductCard = ({ image, title, price, rating }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} width="100" height="100"/>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        </div>
    );
};