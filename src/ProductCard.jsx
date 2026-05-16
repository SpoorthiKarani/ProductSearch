import './ProductCard.css';
import { toast } from "react-toastify";

export const ProductCard = ({ image, title, price, rating }) => {
    const handleAddToBagClick = () => {
        console.log('Add to Bag Clicked');
        toast.success("Added to Bag Successfully");
    }

    return (
        <div className="product-card">
            <img src={image} alt={title} width="100" height="100"/>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
            <button onClick={handleAddToBagClick}>ADD TO BAG</button>
        </div>
    );
};