import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';

import React, { useEffect, useState } from 'react'

const Portfolio = () => {
    const [width, setSize] = useState(window.innerWidth);
    const updateSize = () =>
        setSize(window.innerWidth);
        
    useEffect(() => (window.onresize = updateSize), []);

    return (
        <div className='portfolio'>
            <h4>Recent Projects</h4>
            <h5>Portfolio</h5>
            <Swiper
                spaceBetween={width > 768 ? 30 : 0}
                slidesPerView={width > 992 ? 3 : (width > 768 ? 2 : 1)}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='portfolio-slider'>

                <SwiperSlide>
                    <div className="slider-wrapping">
                        <a target="_blank" rel="noreferrer" href="https://kotacityhub.in/">KotaCityHub e-commerce</a>
                        <img src="/images/Portfolio/KotacityHub/2022-10-11-23-34-31.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-wrapping">
                        <a target="_blank" rel="noreferrer" href="http://gogrocer.onlineserviceslab.com/">GoGrocer e-commerce</a>
                        <img src="/images/Portfolio/GoGrocer/2022-10-11-23-35-08.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-wrapping">
                        <a target="_blank" rel="noreferrer" href="https://celebritiesnation.com/">Celebrities Nation</a>
                        <img src="/images/Portfolio/CelebritiesNation/2022-10-12-00-04-51.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-wrapping">
                        <a target="_blank" rel="noreferrer" href="http://tetris.onlineserviceslab.com/">Tetis Build with React</a>
                        <img src="/images/Portfolio/Tetris/2022-10-12-00-33-24.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio