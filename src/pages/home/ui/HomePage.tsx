import './HomePage.css';
import { HomeBannerCarousel } from '@widgets/home-banner-carousel';
import { ProductCatalog } from '@widgets/product-catalog';

export const HomePage = () => {
    return (
        <div className="home-page">
            <HomeBannerCarousel />
            <ProductCatalog />
        </div>
    );
};