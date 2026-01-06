import './CartPage.css';
import { useCart } from '../../../app/providers/CartProvider';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, count } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="cart-page__empty">
                        <ShoppingCart size={80} className="cart-page__empty-icon" />
                        <h2 className="cart-page__title">Ваша корзина пуста</h2>
                        <p className="cart-page__empty-text">
                            Но это легко исправить! Перейдите в каталог и добавьте товары, которые вам понравятся.
                        </p>
                        <Link to="/" className="cart-page__catalog-btn">
                            Перейти в каталог
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <h1 className="cart-page__title">Корзина ({count})</h1>

                <div className="cart-page__grid">
                    <div className="cart-page__items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <Link to={`/product/${item.id}`} className="cart-item__image">
                                    <img src={item.image} alt={item.name} />
                                </Link>

                                <div className="cart-item__info">
                                    <span className="cart-item__category">{item.category}</span>
                                    <Link to={`/product/${item.id}`} className="cart-item__name">
                                        {item.name}
                                    </Link>
                                    <div className="cart-item__price">
                                        {item.price * item.quantity} ₴
                                    </div>
                                </div>

                                <div className="cart-item__controls">
                                    <div className="cart-item__quantity">
                                        <button
                                            className="cart-item__qty-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="cart-item__qty-value">{item.quantity}</span>
                                        <button
                                            className="cart-item__qty-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            disabled={item.quantity >= (item.stockQuantity ?? Infinity)}
                                            title={item.quantity >= (item.stockQuantity ?? Infinity) ? 'Достигнут предел на складе' : ''}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <button
                                        className="cart-item__remove"
                                        onClick={() => removeFromCart(item.id)}
                                        title="Удалить из корзины"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3 className="cart-summary__title">Итого</h3>

                        <div className="cart-summary__row">
                            <span>Товары ({count})</span>
                            <span>{totalPrice} ₴</span>
                        </div>
                        <div className="cart-summary__row">
                            <span>Доставка</span>
                            <span>По тарифам перевозчика</span>
                        </div>

                        <div className="cart-summary__total">
                            <span>К оплате</span>
                            <span>{totalPrice} ₴</span>
                        </div>

                        <button className="cart-summary__checkout-btn">
                            Оформить заказ
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
