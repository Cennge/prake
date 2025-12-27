import { useEffect, createContext, useContext, useRef } from 'react';
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
    const lenisRef = useRef<Lenis | null>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const tickerFn = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerFn);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    const stop = () => {
        lenisRef.current?.stop();
    };

    const start = () => {
        lenisRef.current?.start();
    };

    return (
        <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, stop, start }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

