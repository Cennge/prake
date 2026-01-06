import { Menu, Grid2X2, Search, User, Scale, ShoppingCart, ChevronDown, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPrake from '@shared/assets/logo/logo-prake.png';
import './Header.css';
import { useState } from 'react';
import { Sidebar } from '../../sidebar/ui/Sidebar';
import { useCart } from '../../../app/providers/CartProvider';

interface HeaderProps {
    onCatalogClick?: () => void;
    isCatalogActive?: boolean;
}

export const Header = ({ onCatalogClick, isCatalogActive }: HeaderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { count } = useCart();

    return (
        <>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                onCatalogClick={() => {
                    setIsSidebarOpen(false);
                    onCatalogClick?.();
                }}
            />
            <header className="header">
                <div className="header__container">
                    <button className="header__menu-btn" onClick={() => setIsSidebarOpen(true)}>
                        <Menu size={24} color="currentColor" />
                    </button>

                    <Link to="/" className="header__logo">
                        <img src={logoPrake} alt="prake" />
                    </Link>

                    <button
                        className={`header__catalog-btn ${isCatalogActive ? 'active' : ''}`}
                        onClick={onCatalogClick}
                    >
                        <Grid2X2 size={24} color="currentColor" />
                        <span>Каталог</span>
                    </button>

                    <div className="header__search">
                        <div className="header__search-icon">
                            <Search size={20} color="currentColor" />
                        </div>
                        <input type="text" placeholder="Я шукаю..." className="header__search-input" />
                        <button className="header__mic-btn">
                            <Mic size={20} color="currentColor" />
                        </button>
                        <button className="header__search-btn">
                            Знайти
                        </button>
                    </div>

                    <button className="header__action-btn header__search-btn-mobile">
                        <Search size={24} color="currentColor" />
                    </button>

                    <div className="header__actions">
                        <button className="header__lang">
                            <span>UA</span>
                            <ChevronDown size={16} color="currentColor" />
                        </button>

                        <button className="header__action-btn">
                            <User size={24} color="currentColor" />
                        </button>

                        <button className="header__action-btn">
                            <Scale size={24} color="currentColor" />
                        </button>

                        <Link to="/cart" className="header__action-btn">
                            <ShoppingCart size={24} color="currentColor" />
                            {count > 0 && <span className="header__cart-badge">{count}</span>}
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};