import React from 'react';
import Navbar from '../components/Navbar';
function HomePage() {
    return (
        <>
            <div className="homepage">
                <div className="landing">

                    <div className="home-text">
                        An experienced{" "}
                        <span style={{ fontWeight: 400 }}>Software Engineer</span> and a{" "}
                        <span style={{ fontWeight: 400 }}>Data Scientist</span>.<br />
                        Passionate about crafting optimum, innovative solutions.
                        <br />
                        Currently pursuing a Master's in Data Science at the University of
                        Massachusetts, Dartmouth.
                    </div>
                    <div className="div-3">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0180aeb1b6b47fcd28fa587418fdb2a5ddeeb5defd2c167f25f2a692b0874901?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f"
                            className="img-2"
                            alt="Description ."
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c503d218593059824130d1c4ab5af32415a9e96437a65de498fbcd03b61b7a06?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f"
                            className="img-3"
                            alt="Description ."
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01dc3f59a97d6c77a53821838aeefe291ca78be91cfc9f24ef7df35a82829afa?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f"
                            className="img-4"
                            alt="Description ."
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23e7b6f2d52184470cfff62a578e5587a6fbaa0f7eb2c703be6ccfbaa689e070?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f"
                            className="img-5"
                            alt="Description ."
                        />
                    </div>
                    <div className="button-variant-2">Connect with me!</div>
                    <div className="div-4">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd945f86e81d977cdacf3eb718258aeb45ccbc58c3cbbe7508b37b498cb92da?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f"
                            className="img-6"
                            alt="Description ."
                        />
                        <div className="scroll-down">SCROLL DOWN</div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab6bd90d3e250da8b958dda85f3a2761f8fb90d3cb3f4469e96c58e119c1445?apiKey=0eb77c1c7aeb4ff786477894168da22f&&apiKey=0eb77c1c7aeb4ff786477894168da22f"
                    className="img-7"
                    alt="Description ."
                />
            </div>
            <style jsx>{`
       .homepage {
                    background-color: rgba(255, 255, 255, 1);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: margin-top 0.3s ease; /* Smooth transition for margin */
                }

                .landing {
                    background-color: rgba(255, 252, 238, 1);
                    display: flex;
                    width: 100%;
                    padding-bottom: 70px;
                    flex-direction: column;
                    overflow: hidden;
                    align-items: center;
                }
      
      @media (max-width: 991px) {
        .landing {
          max-width: 100%;
        }
      }
      .div {
        background-color: var(--BG-MAIN, #fffcee);
        align-self: stretch;
        display: flex;
        width: 100%;
        align-items: flex-start;
        gap: 20px;
        overflow: hidden;
        color: rgba(0, 0, 0, 1);
        white-space: nowrap;
        flex-wrap: wrap;
        justify-content: space-between;
        font: 300 20px Josefin Sans, -apple-system, Roboto, Helvetica,
          sans-serif;
      }




      .home-text {
        color: rgba(0, 0, 0, 1);
        text-align: center;
        margin-top: 278px;
        width: 1370px;
        font: 300 48px Josefin Sans, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .an-experienced-software-engineer-and-a-data-scientist-passionate-about-crafting-optimum-innovative-solutions-currently-pursuing-a-masters-in-data-science-at-the-university-of-massachusetts-dartmouth {
          max-width: 100%;
          margin-top: 40px;
          font-size: 40px;
        }
      }
      .div-3 {
        display: flex;
        margin-top: 45px;
        align-items: start;
        gap: 20px;
        justify-content: space-between;
      }
      @media (max-width: 991px) {
        .div-3 {
          margin-top: 40px;
        }
      }
      .img-2 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 40px;
        align-self: stretch;
        margin: auto 0;
      }
      .img-3 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 45px;
      }
      .img-4 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 43px;
      }
      .img-5 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 40px;
      }
      .button-variant-2 {
        align-self: stretch;
        flex-grow: 1;
        width: 165px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 0px 4px 4px rgba(30, 30, 30, 0.8);
        min-height: 75px;
        gap: 15px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        flex-wrap: wrap;
        margin: 38px 0 0 26px;
        padding: 25px 15px 25px 16px;
        font: 400 26px Josefin Sans, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      .div-4 {
        align-self: start;
        display: flex;
        width: 152px;
        max-width: 100%;
        flex-direction: column;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        margin: 52px 0 0 41px;
        font: 200 20px Josefin Sans, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-4 {
          margin: 40px 0 0 10px;
        }
      }
      .img-6 {
        aspect-ratio: 0.38;
        object-fit: contain;
        object-position: center;
        width: 83px;
        z-index: 10;
      }
      .scroll-down {
        margin-top: -10px;
      }
      .img-7 {
        aspect-ratio: 1.54;
        object-fit: contain;
        object-position: center;
        width: 100%;
      }
      @media (max-width: 991px) {
        .img-7 {
          max-width: 100%;
        }
      }
    `}</style>
        </>
    );
}

export default HomePage;
