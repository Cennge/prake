import { X, Home, Info, CreditCard, Truck, ShieldCheck, FileText, Heart, Scale, ShoppingCart, LogIn, UserPlus, Grid2X2, ChevronDown } from 'lucide-react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@app/providers/SmoothScroll';
import { useEffect } from 'react';
import logoPrake from '@shared/assets/logo/logo-prake.png';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onCatalogClick?: () => void;
}


export const Sidebar = ({ isOpen, onClose, onCatalogClick }: SidebarProps) => {
    const { stop, start } = useSmoothScroll();

    useEffect(() => {
        if (isOpen) {
            stop();
        } else {
            start();
        }
        return () => {
            start();
        };
    }, [isOpen, stop, start]);

    return (
        <>
            <div className={`sidebar-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar__header">
                    <img src={logoPrake} alt="prake" className="sidebar__logo" />

                    <div className="sidebar__header-actions">
                        <button className="sidebar__lang">
                            <span>UA</span>
                            <ChevronDown size={16} />
                        </button>

                        <button className="sidebar__close-btn" onClick={onClose}>
                            <X size={24} color="#6b7280" />
                        </button>
                    </div>
                </div>

                <nav className="sidebar__nav">
                    <div className="sidebar__item sidebar__item--catalog" onClick={() => {
                        onCatalogClick?.();
                        onClose();
                    }} style={{ cursor: 'pointer' }}>
                        <Grid2X2 size={24} className="sidebar__icon" />
                        <span>Каталог</span>
                    </div>
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
