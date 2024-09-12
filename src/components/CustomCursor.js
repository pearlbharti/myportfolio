import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorFRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorF = cursorFRef.current;

        let cursorX = 0, cursorY = 0, pageX = 0, pageY = 0;

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            gsap.to(cursor, { duration: 0.01, left: mouseX - 4, top: mouseY - 4 });

            pageX = mouseX;
            pageY = mouseY;
        };

        const lerp = (start, end, amount) => (1 - amount) * start + amount * end;

        const cursorLoop = () => {
            cursorX = lerp(cursorX, pageX, 0.4);
            cursorY = lerp(cursorY, pageY, 0.4);
            gsap.to(cursorF, { duration: 0.01, left: cursorX - 15, top: cursorY - 15 });

            requestAnimationFrame(cursorLoop);
        };

        cursorLoop();
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="custom-cursor" ref={cursorRef}></div>
            <div className="cursor-follow" ref={cursorFRef}></div>

            <style jsx>{`
        .custom-cursor {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #eae3cf;
          mix-blend-mode: hard-light;
          position: fixed;
          z-index: 999;
          pointer-events: none;
          transition: opacity 0.4s;
          top: -30px;
          left: -30px;
        }

        .cursor-follow {
            position: fixed;
            border-radius: 50%;
            border: 1px dashed #eae3cf;
            width: 30px;
            height: 30px;
            pointer-events: none;
            animation: spin 2.6s linear infinite !important; /* Adding !important to enforce the spin animation */
            z-index: 9999; /* Ensure it's on top of other elements */
            }

        @keyframes spin {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
};

export default CustomCursor;
