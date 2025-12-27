import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { Header } from '@widgets/header';

import { ScrollToTop } from '@widgets/scroll-to-top';

export const App = () => {
    return (
        <BrowserRouter>
            <SmoothScroll>
                <Header />
                <AppRouter />
                <ScrollToTop />
            </SmoothScroll>
        </BrowserRouter>
    );
};