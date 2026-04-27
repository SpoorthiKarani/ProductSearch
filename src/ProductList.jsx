import {useState, useMemo} from 'react';
import { ProductCard } from "./ProductCard";
import './ProductList.css';

export const ProductList = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        return products.slice(start, end);
    }, [products, currentPage]);

    if (!products?.length) return <p>No products found</p>;

    return (
        <>
        <div className="product-list">
            {paginatedProducts?.map(product => (
                <ProductCard key={product?.id} image={product.image} title={product.title} price={product.price} rating={product.rating} />
            ))}
        </div>
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
        </div>
        </>
    );
};