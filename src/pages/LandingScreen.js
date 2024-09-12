import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { eye, pearllogo, MEnTIGGS, wavingHand } from '../assets/images';
import CustomCursor from '../components/CustomCursor';
const LandingScreen = () => {
    const eyesRef = useRef([]);
    const anchorRef = useRef(null);
    const cursorRef = useRef(null);
    const cursorFRef = useRef(null);

    useEffect(() => {
        const anchor = anchorRef.current;
        const eyes = eyesRef.current;
        const cursor = cursorRef.current;
        const cursorF = cursorFRef.current;

        let cursorX = 0, cursorY = 0, pageX = 0, pageY = 0;

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Update cursor position directly with mouse movement
            gsap.to(cursor, { duration: 0.01, left: mouseX - 4, top: mouseY - 4 });

            // Set target positions for cursor-f to follow smoothly
            pageX = mouseX;
            pageY = mouseY;

            // Calculate the angle for the eyes
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
            const angleDeg = calculateAngle(mouseX, mouseY, anchorX, anchorY);

            eyes.forEach((eye) => {
                eye.style.transform = `rotate(${90 + angleDeg}deg)`;
            });
        };

        const calculateAngle = (cx, cy, ex, ey) => {
            const dy = ey - cy;
            const dx = ex - cx;
            const rad = Math.atan2(dy, dx);
            const deg = (rad * 180) / Math.PI;
            return deg;
        };

        const lerp = (start, end, amount) => (1 - amount) * start + amount * end;

        const cursorLoop = () => {
            // Smoothly move cursor-f towards the target positions
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
        <div className='landing-screen'>
            <div className="anchor-eyes">
                <img id="anchor" ref={anchorRef} src={MEnTIGGS} alt="Anchor" />
                <div id="eyes">
                    <img
                        ref={(el) => (eyesRef.current[0] = el)}
                        id="eye1"
                        src={eye}
                        alt="Eye 1"
                        style={{ position: 'absolute', top: '-116px', left: '236px' }}
                    />
                    <img
                        ref={(el) => (eyesRef.current[1] = el)}
                        id="eye2"
                        src={eye}
                        alt="Eye 2"
                        style={{ position: 'absolute', top: '-115px', left: '176px' }}
                    />
                    <img
                        ref={(el) => (eyesRef.current[2] = el)}
                        id="eye3"
                        src={eye}
                        alt="Eye 3"
                        style={{ position: 'absolute', top: '68px', left: '250px' }}
                    />
                    <img
                        ref={(el) => (eyesRef.current[3] = el)}
                        id="eye4"
                        src={eye}
                        alt="Eye 4"
                        style={{ position: 'absolute', top: '85px', left: '293px' }}
                    />
                </div>
            </div>

            <div className="dummy">
                <div className="left-content">
                    <div className="wave">
                        <img src={wavingHand} alt="Waving Hand" />
                    </div>
                    <p className="hero-text">
                        Hi, I am Pearl.<br /> A UX Designer and Developer. <br />I enjoy creating inclusive, clean, <br />and human-centered designs.
                    </p>
                </div>
            </div>

            <CustomCursor />

            <style jsx>{`
                :root {
                  --background-color: rgb(1, 1, 31);
                  --border-color: rgba(255, 255, 255, 0.1);
                  --highlight-color: rgb(126, 87, 194);
                  --icon-color-dark: white;
                  --icon-color-light: black;
                }

                .landing-screen {
                    margin: 5rem 0 5rem 0;
                  display: flex;
                  flex-direction: column;
                }

                .anchor-eyes {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex: 1;
                  position: relative;
                }

                #anchor {
                  position: relative;
                  right: -250px;
                }

                #eyes {
                  position: absolute;
                }

                .left-content {
                  margin: 5rem;
                  transform: translate(0%, 0%);
                }

                .dummy {
                  position: absolute;
                  text-align: left;
                  display: flex;
                  align-items: left;
                  flex-direction: column;
                }

                .hero-text {
                  color: #888;
                  font-size: 2.5em;
                  font-weight: bold;
                  margin: 0;
                  transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
                }

                .hero-text:hover {
                  color: #fff;
                  transform: scale(1.1);
                  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
                }


                .wave {
                  animation: wave-animation 2s infinite;
                  display: inline-block;
                  margin-right: 20px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                }

                .wave img {
                  width: 80px;
                  height: auto;
                }

                @keyframes wave-animation {
                  0% {
                    transform: rotate(0deg);
                  }
                  10% {
                    transform: rotate(14deg);
                  }
                  20% {
                    transform: rotate(-8deg);
                  }
                  30% {
                    transform: rotate(14deg);
                  }
                  40% {
                    transform: rotate(-4deg);
                  }
                  50% {
                    transform: rotate(10deg);
                  }
                  60% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(0deg);
                  }
                }

                
                
            `}</style>
        </div>
    );
};

export default LandingScreen;
