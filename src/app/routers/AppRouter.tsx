import { Routes, Route } from 'react-router-dom';
import { HomePage, RegisterPage, OfferPage, AboutPage, PaymentPage, DeliveryPage, WarrantyPage, NotFoundPage } from '../../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};