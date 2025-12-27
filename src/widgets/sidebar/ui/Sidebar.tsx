import { X, Home, Info, CreditCard, Truck, ShieldCheck, FileText, Heart, Scale, ShoppingCart, LogIn, UserPlus, Grid2X2 } from 'lucide-react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflowY = 'scroll'; // Maintain scrollbar to prevent shift
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        };
    }, [isOpen]);

    return (
        <>
            <div className={`sidebar-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="sidebar__close-btn" onClick={onClose}>
                    <X size={24} color="#6b7280" />
                </button>

                <nav className="sidebar__nav">
                    <Link to="/catalog" className="sidebar__item sidebar__item--catalog" onClick={onClose}>
                        <Grid2X2 size={24} className="sidebar__icon" />
                        <span>Каталог</span>
                    </Link>
                    <Link to="/" className="sidebar__item" onClick={onClose}>
                        <Home size={24} className="sidebar__icon" />
                        <span>Головна</span>
                    </Link>
                    <Link to="/about" className="sidebar__item" onClick={onClose}>
                        <Info size={24} className="sidebar__icon" />
                        <span>Про нас</span>
                    </Link>
                    <Link to="/payment" className="sidebar__item" onClick={onClose}>
                        <CreditCard size={24} className="sidebar__icon" />
                        <span>Оплата</span>
                    </Link>
                    <Link to="/delivery" className="sidebar__item" onClick={onClose}>
                        <Truck size={24} className="sidebar__icon" />
                        <span>Доставка</span>
                    </Link>
                    <Link to="/warranty" className="sidebar__item" onClick={onClose}>
                        <ShieldCheck size={24} className="sidebar__icon" />
                        <span>Гарантія та повернення</span>
                    </Link>
                    <Link to="/offer" className="sidebar__item" onClick={onClose}>
                        <FileText size={24} className="sidebar__icon" />
                        <span>Договір публічної оферти</span>
                    </Link>

                    <div className="sidebar__divider" />

                    <Link to="/favorites" className="sidebar__item" onClick={onClose}>
                        <Heart size={24} className="sidebar__icon" />
                        <span>Обране</span>
                    </Link>
                    <Link to="/compare" className="sidebar__item" onClick={onClose}>
                        <Scale size={24} className="sidebar__icon" />
                        <span>Порівняння</span>
                    </Link>
                    <Link to="/cart" className="sidebar__item" onClick={onClose}>
                        <ShoppingCart size={24} className="sidebar__icon" />
                        <span>Кошик</span>
                    </Link>
                    <Link to="/login" className="sidebar__item" onClick={onClose}>
                        <LogIn size={24} className="sidebar__icon" />
                        <span>Вхід</span>
                    </Link>
                    <Link to="/register" className="sidebar__item" onClick={onClose}>
                        <UserPlus size={24} className="sidebar__icon" />
                        <span>Реєстрація</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};
