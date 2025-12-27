import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { Header } from '@widgets/header';

import { ScrollToTop } from '@widgets/scroll-to-top';
import { Footer } from '@widgets/footer';

export const App = () => {
    return (
        <BrowserRouter>
            <SmoothScroll>
                <Header />
                <AppRouter />
                <Footer />
                <ScrollToTop />
            </SmoothScroll>
        </BrowserRouter>
    );
};