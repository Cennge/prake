import { ShieldCheck, RefreshCw, AlertCircle, CheckCircle2, Truck, Info } from 'lucide-react';
import './WarrantyPage.css';

export const WarrantyPage = () => {
    return (
        <div className="warranty-page">
            <div className="warranty-page__container">
                <header className="warranty-page__header">
                    <h1 className="warranty-page__title">Гарантія та повернення</h1>
                    <p className="warranty-page__intro">
                        Ми дбаємо про якість наших товарів та забезпечуємо прозорі умови гарантійного обслуговування та повернення.
                    </p>
                </header>

                <section className="warranty-page__general">
                    <div className="warranty-card">
                        <div className="warranty-card__icon-wrapper">
                            <ShieldCheck size={32} />
                        </div>
                        <div className="warranty-card__content">
                            <h2 className="warranty-card__title">Основні умови гарантії</h2>
                            <p className="warranty-card__text">
                                На весь вживаний (б/в) та новий товар надається <strong>14 днів гарантії</strong>, якщо інше не зазначено в описі товару.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="warranty-page__process">
                    <div className="process-info">
                        <div className="process-info__header">
                            <RefreshCw className="process-info__icon" size={24} />
                            <h2 className="process-info__title">Процес повернення</h2>
                        </div>
                        <div className="process-info__content">
                            <p>
                                Повернення товару здійснюється через операторів «Нова пошта» або «Укрпошта» виключно після попереднього узгодження з менеджером.
                            </p>
                            <div className="process-steps">
                                <div className="process-step">
                                    <Truck size={20} />
                                    <span>Покупець відправляє товар без післяплати</span>
                                </div>
                                <div className="process-step">
                                    <Info size={20} />
                                    <span>Менеджер отримує та перевіряє товар</span>
                                </div>
                                <div className="process-step">
                                    <CheckCircle2 size={20} />
                                    <span>Протягом 3 днів ми зв'язуємося з вами (заміна або повернення коштів)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="warranty-page__requirements">
                    {/* Used Goods Requirements */}
                    <div className="requirement-block requirement-block--used">
                        <div className="requirement-block__header">
                            <AlertCircle size={24} />
                            <h3 className="requirement-block__title">Вимоги для вживаного товару (б/в)</h3>
                        </div>
                        <ul className="requirement-list">
                            <li>Товар не піддавався ремонту та немає слідів відкриття корпусу;</li>
                            <li>Відсутні сліди потрапляння рідини всередину виробу;</li>
                            <li>Товар зберігся у тому ж вигляді, в якому був отриманий (наявність усіх ярликів, наклейок та повної комплектації).</li>
                        </ul>
                    </div>

                    {/* New Goods Requirements */}
                    <div className="requirement-block requirement-block--new">
                        <div className="requirement-block__header">
                            <CheckCircle2 size={24} />
                            <h3 className="requirement-block__title">Вимоги для нового товару</h3>
                        </div>
                        <ul className="requirement-list">
                            <li>Товар не був у вжитку та не має слідів використання (подряпин, сколів, потертостей);</li>
                            <li>Цілісність заводської упаковки, наявність документації та комплектуючих;</li>
                            <li>Відсутність слідів розкриття або потрапляння рідини на виріб, упаковку чи документацію.</li>
                        </ul>
                    </div>
                </div>

                <div className="warranty-page__notice">
                    <AlertCircle className="notice-icon" size={20} />
                    <p>
                        Повернення товару проводиться <strong>за рахунок Покупця</strong> без послуги післяплати та додаткових поштових послуг (пакування, виклик кур'єра тощо).
                    </p>
                </div>
            </div>
        </div>
    );
};
