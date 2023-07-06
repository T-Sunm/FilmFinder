import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNextLink, GrFormPrevious } from 'react-icons/gr'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import './Hero.css'
import image1 from '../../assets/avatar.png'

export const HeroBanner = () => {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={image1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image1} alt="slide_image" />
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow border">
                        <GrFormPrevious />
                    </div>
                    <div className="swiper-button-next slider-arrow border">
                        <GrFormNextLink />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}
