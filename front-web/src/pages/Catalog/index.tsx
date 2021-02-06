import React, {useEffect, useState} from "react";
import ProductCard from './components/ProductCard';
import './styles.scss';
import {Link} from "react-router-dom";
import {ProductResponse} from "../../core/types/Product";
import {makerequest} from "../../core/Utils/request";
import ProductCardLoader from "./components/Loaders/ProductCardLoader";
import Pagination from "../../core/components/Pagination";

const Catalog = () => {
    const [productsResponse, setProductsResponse] = useState<ProductResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    console.log(productsResponse);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12
        }
        setIsLoading(true);
        makerequest({url: '/products/', params})
            .then(response => setProductsResponse(response.data))
            .finally(() => setIsLoading(false));
    }, [activePage]);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catálogo de Produtos
            </h1>
            <div className="catalog-products">
                {isLoading ? <ProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                )))}
                {productsResponse && (
                    <Pagination totalPages={productsResponse.totalPages}
                                activePage={activePage}
                                onChange={page => setActivePage(page)}
                                />
                )}
            </div>
        </div>
    );

};

export default Catalog;

