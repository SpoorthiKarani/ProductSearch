import './SearchProduct.css';

export const SortBy = ({ sortBy, setSortBy }) => {
    return (
        <div className="sort-by">
            <select name="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="rating">Default</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="priceLowHigh">Price: Low to High</option>
            </select>
        </div>
    );
};

export const SearchProduct = ({search, setSearch}) => {
    return (
        <div className="search-product">
            <input 
                name="search" 
                type="text" 
                placeholder="Search for products..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
        </div>
    );
};