import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';
import logo from '@shared/assets/logo/logo-prake.png';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onComplete();
            }
        });

        gsap.set(logoRef.current, { opacity: 0, y: 15, scale: 0.95 });
        gsap.set(progressRef.current, { scaleX: 0 });
        gsap.set(progressBarRef.current, { opacity: 0 });

        tl.to(logoRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to(progressBarRef.current, {
                opacity: 1,
                duration: 0.3
            }, "-=0.5")
            .to(progressRef.current, {
                scaleX: 1,
                duration: 1.2,
                ease: "circ.inOut"
            })
            .to([progressBarRef.current, logoRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: "power2.in"
            })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut"
            });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div className="preloader" ref={containerRef}>
            <div className="preloader-content">
                <img src={logo} alt="Loading..." className="preloader-logo" ref={logoRef} />
                <div className="preloader-progress-bar" ref={progressBarRef}>
                    <div className="preloader-progress" ref={progressRef}></div>
                </div>
            </div>
        </div>
    );
};
