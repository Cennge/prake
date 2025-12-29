import { Zap, Boxes, ShieldCheck, TrendingDown, Heart } from 'lucide-react';
import './AboutPage.css';

export const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-page__container">
                <header className="about-page__header">
                    <h1 className="about-page__title">Про нас</h1>
                    <div className="about-page__hero">
                        <p className="about-page__intro">
                            <strong>prake.com.ua</strong> — роздрібний магазин б/в та нових комп'ютерних комплектуючих, заснований у 2014-му році.
                            Ми пройшли шлях від допоміжного інструменту до повноцінного окремого напрямку, щоразу вдосконалюючи наші сервіси.
                        </p>
                        <p className="about-page__mission">
                            Наша мета — зробити процес покупки максимально простим, зручним та швидким для кожного клієнта.
                        </p>
                    </div>
                </header>

                <section className="about-page__benefits">
                    <h2 className="about-page__section-title">Наші основні переваги</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-card__icon">
                                <Zap size={24} />
                            </div>
                            <h3 className="benefit-card__title">Швидка обробка</h3>
                            <p className="benefit-card__text">
                                Від моменту оплати до відправлення зазвичай проходить не більше одного робочого дня.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-card__icon">
                                <Boxes size={24} />
                            </div>
                            <h3 className="benefit-card__title">Весь товар у наявності</h3>
                            <p className="benefit-card__text">
                                Ми не використовуємо дропшипінг. Весь товар фактично знаходиться на нашому складі в Одесі.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-card__icon">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="benefit-card__title">Перевірене б/в</h3>
                            <p className="benefit-card__text">
                                Абсолютно весь вживаний товар проходить ретельне передпродажне тестування перед виставленням.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-card__icon">
                                <TrendingDown size={24} />
                            </div>
                            <h3 className="benefit-card__title">Контроль цін</h3>
                            <p className="benefit-card__text">
                                Ми постійно стежимо за ринком, щоб запропонувати вам ціни нижче середньоринкових.
                            </p>
                        </div>
                    </div>
                </section>

                <footer className="about-page__footer">
                    <div className="about-page__outro">
                        <Heart className="about-page__heart-icon" size={32} />
                        <p>
                            Будемо раді, якщо покупки в інтернет-магазині <strong>prake.com.ua</strong> принесуть Вам користь та позитивні емоції.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
