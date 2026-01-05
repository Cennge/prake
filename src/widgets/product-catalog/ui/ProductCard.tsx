import { Link } from 'react-router-dom';
import type { Product } from '../model/types';
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <Link to={`/product/${product.id}`} className="product-card__link">
                    {/* Placeholder for image if not found, or actual image */}
                    <div className="product-card__image-placeholder">
                        {product.image ? (
                            <img src={product.image} alt={product.name} className="product-card__image" />
                        ) : (
                            <span>No Image</span>
                        )}
                    </div>
                </Link>
                {product.oldPrice && (
                    <span className="product-card__discount">
                        -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </span>
                )}
            </div>

            <div className="product-card__content">
                <div className="product-card__category">{product.category}</div>
                <h3 className="product-card__title" title={product.name}>
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>

                <div className="product-card__specs">
                    {product.specifications.slice(0, 3).map((spec, index) => (
                        <div key={index} className="product-card__spec-item">
                            <span className="spec-key">{spec.key}:</span> <span className="spec-value">{spec.value}</span>
                        </div>
                    ))}
                </div>

                <div className="product-card__footer">
                    <div className="product-card__price-block">
                        {product.oldPrice && (
                            <div className="product-card__old-price">
                                {product.oldPrice} ₴
                            </div>
                        )}
                        <div className="product-card__price">
                            {product.price} ₴
                        </div>
                    </div>

                    <button className={`product-card__button ${!product.inStock ? 'disabled' : ''}`} disabled={!product.inStock}>
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                    </button>
                </div>
            </div>
        </div>
    );
};
