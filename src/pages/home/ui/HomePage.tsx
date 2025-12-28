import './HomePage.css';
import { HomeBannerCarousel } from '@widgets/home-banner-carousel';

export const HomePage = () => {
    return (
        <div className="home-page">
            <HomeBannerCarousel />
        </div>
    );
};