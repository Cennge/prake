import { useParams } from 'react-router-dom';
import productsData from '../../../data/products.json';
import './ProductPage.css';
import type { Product, ProductReview } from '../../../widgets/product-catalog/model/types';
import { useEffect, useState, useRef } from 'react';
import { Star, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

// Dynamically import all images from the assets folder
const allImages = import.meta.glob<{ default: string }>('../../../shared/assets/product/**/*.{jpg,jpeg,png,webp}', {
    eager: true,
});

const SAMPLE_REVIEWS_TEXT = [
    'Отличный товар, полностью соответствует описанию! Рекомендую к покупке.',
    'Качество сборки на высоте. Доставили быстро, упаковка надежная.',
    'Пользуюсь уже неделю, никаких нареканий. Очень доволен выбором.',
    'Хорошее соотношение цены и качества. Выглядит даже лучше, чем на фото.',
    'Функционал радует, все работает как часы. Спасибо магазину!'
];

const SAMPLE_NAMES = ['Александр', 'Мария', 'Дмитрий', 'Елена', 'Андрей', 'Ольга', 'Сергей', 'Наталья'];

const generateRandomReviews = (baseId: number): ProductReview[] => {
    const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 reviews
    const reviews: ProductReview[] = [];

    for (let i = 0; i < count; i++) {
        reviews.push({
            id: baseId * 100 + i,
            author: SAMPLE_NAMES[Math.floor(Math.random() * SAMPLE_NAMES.length)],
            rating: Math.random() > 0.3 ? 5 : 4, // Mostly 5 stars, some 4
            date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
            text: SAMPLE_REVIEWS_TEXT[Math.floor(Math.random() * SAMPLE_REVIEWS_TEXT.length)]
        });
    }
    return reviews;
};

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [activeImage, setActiveImage] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');

    // Explicitly type ref as HTMLDivElement
    const reviewsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const foundProductData = (productsData as any[]).find(p => p.id === Number(id));

        if (foundProductData) {
            const productImages: string[] = [];
            Object.keys(allImages).forEach((key) => {
                if (key.includes(`/${foundProductData.image}/`)) {
                    productImages.push(allImages[key].default);
                }
            });

            const mainImage = productImages.find(img => img.includes('main1')) || productImages[0] || '';

            // Ensure reviews exist
            let reviews = foundProductData.reviews;
            if (!reviews || reviews.length === 0) {
                reviews = generateRandomReviews(foundProductData.id);
            }

            setProduct({
                ...foundProductData,
                image: mainImage,
                images: productImages.length > 0 ? productImages : [mainImage],
                reviews: reviews
            } as Product);

            setActiveImage(mainImage);
        }
    }, [id]);

    const scrollToReviews = () => {
        setActiveTab('reviews');
        if (reviewsRef.current) {
            reviewsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!product) {
        return (
            <div className="page-container">
                <div className="container">
                    <h2 className="error-title">Товар не найден</h2>
                </div>
            </div>
        );
    }

    const averageRating = product.reviews
        ? (product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length).toFixed(1)
        : '0.0';

    return (
        <div className="product-page">
            <div className="product-page__background-glow"></div>
            <div className="container">
                <div className="product-page__grid">
                    <div className="product-page__gallery-wrapper sticky-gallery">
                        <div className="product-page__main-image-container">
                            {activeImage ? (
                                <img src={activeImage} alt={product.name} className="product-page__main-image" />
                            ) : (
                                <div className="product-page__no-image">Нет изображения</div>
                            )}
                            {product.oldPrice && (
                                <div className="product-page__discount-badge">
                                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                                </div>
                            )}
                        </div>
                        {product.images && product.images.length > 1 && (
                            <div className="product-page__thumbnails">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`product-page__thumbnail ${activeImage === img ? 'active' : ''}`}
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <img src={img} alt={`${product.name} ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="product-page__info">
                        <div className="product-page__header">
                            <div className="product-page__badges">
                                <span className="product-page__category">{product.category}</span>
                                {product.inStock && <span className="product-page__badge-stock">В наличии</span>}
                            </div>

                            <h1 className="product-page__title">{product.name}</h1>

                            <div className="product-page__rating-row" onClick={scrollToReviews} title="Смотреть отзывы">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={18}
                                            className={star <= Math.round(Number(averageRating)) ? 'filled-star' : 'empty-star'}
                                        />
                                    ))}
                                </div>
                                <span className="rating-text">
                                    <span className="rating-value">{averageRating}</span> based on {product.reviews?.length} reviews
                                </span>
                            </div>
                        </div>

                        <div className="product-page__features-grid">
                            {product.specifications.slice(0, 4).map((spec, index) => (
                                <div key={index} className="feature-card">
                                    <span className="feature-label">{spec.key}</span>
                                    <span className="feature-value">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="product-page__purchase-block">
                            <div className="product-page__price-wrapper">
                                {product.oldPrice && (
                                    <span className="product-page__old-price">{product.oldPrice} ₴</span>
                                )}
                                <span className="product-page__price">{product.price} <small>₴</small></span>
                            </div>

                            <button className="product-page__buy-btn" disabled={!product.inStock}>
                                <ShoppingCart size={20} />
                                {product.inStock ? 'Добавить в корзину' : 'Сообщить о наличии'}
                            </button>
                        </div>

                        <div className="product-page__delivery-info">
                            <div className="delivery-item">
                                <Truck size={24} className="icon-blue" />
                                <div>
                                    <strong>Доставка</strong>
                                    <p>Новая Почта, Курьер</p>
                                </div>
                            </div>
                            <div className="delivery-item">
                                <ShieldCheck size={24} className="icon-blue" />
                                <div>
                                    <strong>Гарантия</strong>
                                    <p>14 дней</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Block */}
                {product.description && (
                    <div className="product-page__section product-page__description-block">
                        <h2 className="section-title">О товаре</h2>
                        <div className="description-content">
                            <p>{product.description}</p>
                        </div>
                    </div>
                )}

                {/* Specs and Reviews Tabs Block */}
                <div className="product-page__section" ref={reviewsRef}>
                    <div className="product-page__tabs">
                        <button
                            className={`product-page__tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('specs')}
                        >
                            Характеристики
                        </button>
                        <button
                            className={`product-page__tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Отзывы <span className="tab-count">{product.reviews?.length}</span>
                        </button>
                    </div>

                    <div className="product-page__tab-content">
                        {activeTab === 'specs' && (
                            <div className="product-page__specs-container">
                                <dl className="specs-grid">
                                    {product.specifications.map((spec, index) => (
                                        <div key={index} className="spec-row">
                                            <dt className="spec-dt">{spec.key}</dt>
                                            <div className="spec-line"></div>
                                            <dd className="spec-dd">{spec.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="product-page__reviews">
                                {product.reviews && product.reviews.length > 0 ? (
                                    <div className="reviews-grid">
                                        {product.reviews.map((review) => (
                                            <div key={review.id} className="review-card">
                                                <div className="review-card__header">
                                                    <div className="review-card__user-info">
                                                        <div className="review-avatar">
                                                            {review.author.charAt(0)}
                                                        </div>
                                                        <div className="review-meta">
                                                            <span className="review-card__author">{review.author}</span>
                                                            <span className="review-card__date">{review.date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="review-card__rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                size={16}
                                                                className={i < review.rating ? 'filled-star' : 'empty-star'}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="review-card__text">{review.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="no-reviews">Отзывов пока нет.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
