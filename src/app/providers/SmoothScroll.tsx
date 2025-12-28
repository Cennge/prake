import { useEffect, createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollContextType {
    lenis: Lenis | null;
    stop: () => void;
    start: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
    lenis: null,
    stop: () => { },
    start: () => { },
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        setLenis(lenisInstance);

        lenisInstance.on('scroll', ScrollTrigger.update);

        const tickerFn = (time: number) => {
            lenisInstance.raf(time * 1000);
        };

        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerFn);
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    const stop = () => {
        lenis?.stop();
    };

    const start = () => {
        lenis?.start();
    };

    return (
        <SmoothScrollContext.Provider value={{ lenis, stop, start }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

