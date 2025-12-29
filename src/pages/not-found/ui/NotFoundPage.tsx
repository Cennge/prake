import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Ghost } from 'lucide-react';
import './NotFoundPage.css';

export const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <div className="not-found__visual">
                    <h1 className="not-found__code">404</h1>
                    <div className="not-found__ghost">
                        <Ghost size={80} />
                    </div>
                </div>

                <h2 className="not-found__title">Сторінку не знайдено</h2>
                <p className="not-found__text">
                    На жаль, такої сторінки не існує або її було перенесено.
                    Можливо, у посиланні є помилка.
                </p>

                <div className="not-found__actions">
                    <Link to="/" className="not-found__btn not-found__btn--primary">
                        <Home size={18} />
                        <span>На головну</span>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="not-found__btn not-found__btn--secondary"
                    >
                        <ArrowLeft size={18} />
                        <span>Повернутися назад</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
