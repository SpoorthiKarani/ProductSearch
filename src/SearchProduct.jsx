import {useMemo} from 'react';
import './SearchProduct.css';

export const FilterBy = ({ products, category, setCategory }) => {
    const categories = useMemo(() => {
        return ["all", ...new Set(products.map(p => p.category))];
    }, [products]);
    console.log(categories);

    return (
        <div className='filter-by'>
            <span>Filter By:</span>
            {categories.map((filter) => (
                <button className={category === filter ? "active" : ""} key={filter} onClick={() => setCategory(filter)}>{filter}</button>
            ))}
        </div>
    )
};

export const SearchProduct = ({ search, setSearch }) => {
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