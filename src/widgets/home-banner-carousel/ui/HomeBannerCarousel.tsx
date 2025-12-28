import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HomeBannerCarousel.css';

import banner1 from '@shared/assets/images/homePage/prake-1.png';
import banner1Mobile from '@shared/assets/images/homePage/prake-1-mobile.png';
import banner2 from '@shared/assets/images/homePage/prake-2.png';
import banner2Mobile from '@shared/assets/images/homePage/prake-2-mobile.png';

const BANNERS = [
    { desktop: banner1, mobile: banner1Mobile, alt: 'Banner 1' },
    { desktop: banner2, mobile: banner2Mobile, alt: 'Banner 2' },
];

export const HomeBannerCarousel = () => {
    return (
        <section className="home-banner-carousel">
            <div className="home-banner-wrapper">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        el: '.home-banner-pagination',
                    }}
                    loop={true}
                    autoHeight={true}
                    className="home-banner-swiper"
                >
                    {BANNERS.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <picture className="banner-slide__picture">
                                <source media="(max-width: 768px)" srcSet={banner.mobile} />
                                <img src={banner.desktop} alt={banner.alt} className="banner-slide__image" />
                            </picture>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="home-banner-pagination"></div>
        </section>
    );
};
