import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import './styles.scss';
import ProductPrice from "../../../../core/components/ProductPrice";

const ProductCard = () => (
    <div className="card-base border-radius-10 product-card">
        <ProductImage />
        <div className="product-info">
            <h6 className="product-name">
                Laço Nº 1
            </h6>
            <ProductPrice price="25,00" />
        </div>
    </div>
);

export default ProductCard;