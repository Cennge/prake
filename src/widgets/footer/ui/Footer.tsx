import { Phone, Mail, MapPin, Clock, Facebook, Instagram, CreditCard, Lock, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Column 1: Contacts */}
                <div className="footer__col">
                    <h3 className="footer__title">КОНТАКТИ</h3>
                    <ul className="footer__list">
                        <li>
                            <a href="tel:+380633291879" className="footer__link footer__link--accent">
                                <Phone size={16} />
                                +38 (063) 329-18-79
                            </a>
                        </li>
                        <li className="footer__text">
                            prake - Комп'ютерні комплектуючі
                        </li>
                        <li>
                            <a href="mailto:vgliba@gmail.com" className="footer__link">
                                <Mail size={16} />
                                vgliba@gmail.com
                            </a>
                        </li>
                        <li className="footer__text">
                            <Clock size={16} style={{ display: 'inline', marginRight: '6px' }} />
                            Пн-Вт 09:00 - 18:00
                            <br />
                            Сб, Нд - Вихідні
                        </li>
                        <li>
                            <a href="#" className="footer__link">
                                <MapPin size={16} />
                                Одеса, Карта проїзду
                            </a>
                        </li>
                    </ul>
                    <div className="footer__copyright">
                        © 2025 prake
                    </div>
                </div>

                {/* Column 2: Information */}
                <div className="footer__col">
                    <h3 className="footer__title">ІНФОРМАЦІЯ</h3>
                    <ul className="footer__list">
                        <li><Link to="/about" className="footer__link">Про нас</Link></li>
                        <li><Link to="/payment" className="footer__link">Оплата</Link></li>
                        <li><Link to="/delivery" className="footer__link">Доставка</Link></li>
                        <li><Link to="/warranty" className="footer__link">Гарантія та повернення</Link></li>
                        <li><Link to="/offer" className="footer__link">Договір публічної оферти</Link></li>
                    </ul>
                </div>

                {/* Column 3: Profile */}
                <div className="footer__col">
                    <h3 className="footer__title">МІЙ ПРОФІЛЬ</h3>
                    <ul className="footer__list">
                        <li>
                            <Link to="/login" className="footer__link">
                                <Lock size={16} /> Вхід
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="footer__link">
                                <User size={16} /> Реєстрація
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Payment */}
                <div className="footer__col">
                    <h3 className="footer__title">МИ ПРИЙМАЄМО</h3>
                    <div className="footer__payment-methods">
                        <div className="payment-badge" title="Visa">
                            <span className="payment-text">VISA</span>
                        </div>
                        <div className="payment-badge" title="Mastercard">
                            <div className="mc-circles">
                                <div className="mc-red"></div>
                                <div className="mc-orange"></div>
                            </div>
                        </div>
                        <div className="payment-badge" title="PrivatBank">
                            <CreditCard size={20} color="#357833" />
                        </div>
                    </div>
                </div>

                {/* Column 5: Socials */}
                <div className="footer__col">
                    <h3 className="footer__title">МИ В СОЦ. МЕРЕЖАХ</h3>
                    <div className="footer__socials">
                        <a href="#" className="social-btn" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="social-btn" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="social-btn" aria-label="Telegram">
                            <Send size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
