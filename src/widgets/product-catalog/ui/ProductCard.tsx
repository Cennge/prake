import { Link } from 'react-router-dom';
import type { Product } from '../model/types';
import './ProductCard.css';
import { useCart } from '../../../app/providers/CartProvider';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <Link to={`/product/${product.id}`} className="product-card__link">
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
                        {product.inStock && product.stockQuantity !== undefined && (
                            <div className="product-card__stock-count">
                                {product.stockQuantity} шт.
                            </div>
                        )}
                    </div>

                    <button
                        className={`product-card__button ${!product.inStock ? 'disabled' : ''}`}
                        disabled={!product.inStock}
                        onClick={(e) => {
                            e.preventDefault();
                            if (product.inStock) addToCart(product);
                        }}
                    >
                        <ShoppingCart size={18} />
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                    </button>
                </div>
            </div>
        </div>
    );
};
