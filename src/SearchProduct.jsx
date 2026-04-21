import './SearchProduct.css';

const SortBy = () => {
    return (
        <select name="sort">
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
        </select>
    );
};

export const SearchProduct = () => {
    return (
        <div className="search-product">
            <input name="search" type="text" placeholder="Search for products..." />
            <SortBy/>
        </div>
    );
};