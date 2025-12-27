import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { Header } from '@widgets/header';

export const App = () => {
    return (
        <BrowserRouter>
            <SmoothScroll>
                <Header />
                <AppRouter />
            </SmoothScroll>
        </BrowserRouter>
    );
};