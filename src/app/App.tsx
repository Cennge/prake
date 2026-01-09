import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { SmoothScroll } from './providers/SmoothScroll';
import { CartProvider } from './providers/CartProvider';
import { AuthProvider } from './providers/AuthProvider';
import { Header } from '@widgets/header';

import { ScrollToTop } from '@widgets/scroll-to-top';
import { Footer } from '@widgets/footer';
import { CatalogSidebar } from '@widgets/catalog-sidebar';
import { useState } from 'react';
import { Preloader } from '@shared/ui/Preloader';

export const App = () => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <BrowserRouter>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            <CartProvider>
                <AuthProvider>
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
                </AuthProvider>
            </CartProvider>
        </BrowserRouter>
    );
};