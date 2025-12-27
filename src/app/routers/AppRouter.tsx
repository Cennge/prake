import { Routes, Route } from 'react-router-dom';
import { HomePage, RegisterPage } from '../../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};