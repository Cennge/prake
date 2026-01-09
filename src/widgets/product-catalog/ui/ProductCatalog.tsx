import productsData from '../../../data/products.json';
import { ProductCard } from './ProductCard';
import './ProductCatalog.css';
import type { Product } from '../model/types';

const images = import.meta.glob<{ default: string }>('../../../shared/assets/product/**/main1.{jpg,jpeg,png,webp}', {
    eager: true,
});

export const ProductCatalog = () => {
    const products: Product[] = productsData.map((p) => {
        const imageKey = Object.keys(images).find((key) => key.includes(`/${p.image}/main1.`));
        const imageUrl = imageKey ? images[imageKey].default : '';

        return {
            ...p,
            image: imageUrl,
        };
    }) as Product[];

    return (
        <section className="product-catalog">
            <div className="container">
                <h2 className="product-catalog__title">Каталог товаров</h2>
                <div className="product-catalog__grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
