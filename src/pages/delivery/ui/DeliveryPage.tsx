import { Truck, ExternalLink, Ship, Package, Info, CreditCard } from 'lucide-react';
import './DeliveryPage.css';

export const DeliveryPage = () => {
    return (
        <div className="delivery-page">
            <div className="delivery-page__container">
                <header className="delivery-page__header">
                    <h1 className="delivery-page__title">Доставка</h1>
                    <p className="delivery-page__intro">
                        Ми співпрацюємо з надійними поштовими операторами України, щоб ваші замовлення прибували швидко та вчасно.
                    </p>
                </header>

                <div className="delivery-page__grid">
                    {/* Nova Poshta Card */}
                    <div className="delivery-card delivery-card--nova-poshta">
                        <div className="delivery-card__header">
                            <div className="delivery-card__icon-wrapper">
                                <Truck size={32} />
                            </div>
                            <h2 className="delivery-card__name">Нова Пошта</h2>
                        </div>
                        <div className="delivery-card__content">
                            <p className="delivery-card__text">
                                Основний оператор експрес-доставки. Доступно для всіх типів оплати (передплата та післяплата).
                            </p>
                            <ul className="delivery-card__features">
                                <li>
                                    <Package size={16} />
                                    <span>До відділення або поштомату</span>
                                </li>
                                <li>
                                    <ExternalLink size={16} />
                                    <span>Згідно з тарифами оператора</span>
                                </li>
                            </ul>
                            <a
                                href="https://novaposhta.ua/shipping-cost/"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="delivery-card__link"
                            >
                                Розрахувати вартість Nova Poshta
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Ukrposhta Card */}
                    <div className="delivery-card delivery-card--ukrposhta">
                        <div className="delivery-card__header">
                            <div className="delivery-card__icon-wrapper">
                                <Ship size={32} />
                            </div>
                            <h2 className="delivery-card__name">Укрпошта</h2>
                        </div>
                        <div className="delivery-card__content">
                            <p className="delivery-card__text">
                                Доступно виключно за умови вибору способу оплати <strong>"Передплата"</strong>.
                            </p>
                            <ul className="delivery-card__features">
                                <li>
                                    <Package size={16} />
                                    <span>Доступно по всій Україні</span>
                                </li>
                                <li>
                                    <CreditCard size={16} />
                                    <span>Тільки за передплатою</span>
                                </li>
                            </ul>
                            <a
                                href="https://www.ukrposhta.ua/ua"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="delivery-card__link"
                            >
                                Офіційний сайт Укрпошти
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="delivery-page__notice">
                    <div className="notice-icon">
                        <Info size={24} />
                    </div>
                    <div className="notice-content">
                        <h3 className="notice-title">Важлива інформація</h3>
                        <p className="notice-text">
                            Терміни відправлення: зазвичай <strong>протягом 1 робочого дня</strong> з моменту підтвердження або оплати замовлення.
                            Ми ретельно пакуємо товар, щоб забезпечити його цілісність під час транспортування.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
