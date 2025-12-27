import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { Header } from '@widgets/header';

import { ScrollToTop } from '@widgets/scroll-to-top';
import { Footer } from '@widgets/footer';
import { CatalogSidebar } from '@widgets/catalog-sidebar';
import { useState } from 'react';

export const App = () => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    return (
        <BrowserRouter>
            <SmoothScroll>
                <Header
                    onCatalogClick={() => setIsCatalogOpen(prev => !prev)}
                    isCatalogActive={isCatalogOpen}
                />
                <CatalogSidebar isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
                <AppRouter />
                <Footer />
                <ScrollToTop />
            </SmoothScroll>
        </BrowserRouter>
    );
};