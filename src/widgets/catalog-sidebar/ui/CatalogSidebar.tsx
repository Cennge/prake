import { Link } from 'react-router-dom';
import { ChevronRight, X, Cpu, Laptop, Monitor, Fan, Plug, Save, Usb, Droplet, Wifi, Keyboard, HardDrive, BatteryCharging, Box, MemoryStick } from 'lucide-react';
import './CatalogSidebar.css';

interface CatalogSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CATEGORIES = [
    { name: 'Модули памяти для ПК и серверов', icon: MemoryStick },
    { name: 'Модули памяти для ноутбуков', icon: Laptop },
    { name: 'Видеокарты', icon: Monitor },
    { name: 'Вентиляторы к корпусам', icon: Fan },
    { name: 'Вентиляторы для процессоров', icon: Cpu },
    { name: 'Вентиляторы для видеокарты', icon: Fan },
    { name: 'Кабели и переходники', icon: Plug },
    { name: 'Карты памяти', icon: Save },
    { name: 'USB флеш накопители', icon: Usb },
    { name: 'Термопаста', icon: Droplet },
    { name: 'Wi-Fi карты и адаптеры', icon: Wifi },
    { name: 'Клавиатуры и мышки', icon: Keyboard },
    { name: 'SSD/HDD - накопители', icon: HardDrive },
    { name: 'Зарядные устройства', icon: BatteryCharging },
    { name: 'Другое', icon: Box }
];

export const CatalogSidebar = ({ isOpen, onClose }: CatalogSidebarProps) => {
    return (
        <>
            <div
                className={`catalog-backdrop ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />

            <aside
                className={`catalog-sidebar ${isOpen ? 'open' : ''}`}
                data-lenis-prevent
            >
                <div className="catalog-sidebar__header">
                    <h2 className="catalog-sidebar__title">Каталог товарів</h2>
                    <button className="catalog-sidebar__close" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="catalog-sidebar__nav">
                    <ul className="catalog-sidebar__list">
                        {CATEGORIES.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <li key={index} className="catalog-sidebar__item">
                                    <Link
                                        to={`/catalog/${index}`}
                                        className="catalog-sidebar__link"
                                        onClick={onClose}
                                    >
                                        <div className="catalog-sidebar__link-content">
                                            <Icon size={20} className="catalog-sidebar__category-icon" />
                                            <span>{category.name}</span>
                                        </div>
                                        <ChevronRight size={16} className="catalog-sidebar__arrow" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
};
