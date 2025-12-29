import { Monitor, Smartphone, Wallet, Send, Info, CreditCard } from 'lucide-react';
import './PaymentPage.css';

export const PaymentPage = () => {
    return (
        <div className="payment-page">
            <div className="payment-page__container">
                <header className="payment-page__header">
                    <h1 className="payment-page__title">Оплата</h1>
                    <p className="payment-page__intro">
                        Обирайте найзручніший для вас спосіб оплати. Ми забезпечуємо швидку обробку кожного платежу.
                    </p>
                </header>

                <div className="payment-page__details-card">
                    <div className="bank-details">
                        <div className="bank-details__icon">
                            <CreditCard size={32} />
                        </div>
                        <div className="bank-details__content">
                            <h2 className="bank-details__title">Реквізити для оплати</h2>
                            <p className="bank-details__account">
                                Рахунок у Приватбанку: <strong>26001054334019</strong>
                            </p>
                            <p className="bank-details__owner">
                                ФОП Гліба Вячеслав Сергійович
                            </p>
                        </div>
                    </div>
                </div>

                <section className="payment-page__methods">
                    <div className="payment-method">
                        <div className="payment-method__header">
                            <Monitor className="payment-method__icon" size={24} />
                            <h3 className="payment-method__title">Приват24 (на ПК)</h3>
                        </div>
                        <p className="payment-method__text">
                            У верхньому меню оберіть <strong>"Мої платежі"</strong>. Введіть номер рахунку та суму.
                        </p>
                        <a
                            href="http://prake.com.ua/blog/oplata-tovara-cherez-privat24-na-pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-method__link"
                        >
                            Докладніше про оплату на ПК
                        </a>
                    </div>

                    <div className="payment-method">
                        <div className="payment-method__header">
                            <Smartphone className="payment-method__icon" size={24} />
                            <h3 className="payment-method__title">Приват24 (Мобільний додаток)</h3>
                        </div>
                        <p className="payment-method__text">
                            Перейдіть у розділ <strong>"Мої платежі"</strong> та слідуйте крокам у додатку для здійснення переказу.
                        </p>
                        <a
                            href="http://prake.com.ua/blog/oplata-tovara-cherez-privat24-na-mobilnom/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-method__link"
                        >
                            Докладніше про оплату в додатку
                        </a>
                    </div>

                    <div className="payment-method">
                        <div className="payment-method__header">
                            <Wallet className="payment-method__icon" size={24} />
                            <h3 className="payment-method__title">Термінали самообслуговування</h3>
                        </div>
                        <p className="payment-method__text">
                            Оберіть пункт <strong>"Торгівля та дистрибуція"</strong>, введіть номер рахунку та необхідну суму.
                        </p>
                    </div>
                </section>

                <div className="payment-page__notice">
                    <Info className="notice-icon" size={20} />
                    <p>
                        Сплачуйте тільки <strong>вартість товару</strong>. Доставку ви оплачуєте окремо при отриманні у відділенні Нової пошти.
                    </p>
                </div>

                <section className="payment-page__confirmation">
                    <h2 className="payment-page__section-title">Підтвердження оплати</h2>
                    <p className="confirmation-intro">
                        Після оплати, будь ласка, надішліть дані платежу зручним для вас способом (Email, Viber, SMS або по телефону):
                    </p>
                    <div className="confirmation-steps">
                        <div className="step">
                            <div className="step__number">1</div>
                            <p className="step__text">Дата та точний час оплати</p>
                        </div>
                        <div className="step">
                            <div className="step__number">2</div>
                            <p className="step__text">Сума без урахування комісії банку</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
