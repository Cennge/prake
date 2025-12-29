import { Routes, Route } from 'react-router-dom';
import { HomePage, RegisterPage, OfferPage, AboutPage } from '../../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
};