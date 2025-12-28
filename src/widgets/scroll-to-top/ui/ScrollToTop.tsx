import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSmoothScroll } from '@app/providers/SmoothScroll';
import './ScrollToTop.css';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { lenis } = useSmoothScroll();

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.5 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        if (!lenis) {
            const toggleVisibilityHandler = () => {
                setIsVisible(window.scrollY > 300);
            };
            window.addEventListener('scroll', toggleVisibilityHandler);
            return () => window.removeEventListener('scroll', toggleVisibilityHandler);
        }

        const handleScroll = (e: any) => {
            setIsVisible(e.scroll > 300);
        };

        lenis.on('scroll', handleScroll);
        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, [lenis]);

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} color="#374151" />
        </button>
    );
};
