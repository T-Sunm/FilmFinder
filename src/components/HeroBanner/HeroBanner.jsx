import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNextLink, GrFormPrevious } from 'react-icons/gr'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import './Hero.css'
import { useSelector } from 'react-redux';
import useFetch from '../../Hooks/useFetch';
import { HeroBannerItem } from './HeroBannerItem';



export const HeroBanner = () => {

    const [movies, setMovies] = useState([]);
    const { url } = useSelector((state => state.home))
    const { data } = useFetch('/movie/popular?language=en-US&page=1');
    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results.slice(0, 6));

        }
    }, [data]);

    return (
        // phải bọc 1 div bên ngoài để css tránh bị ảnh hưởng các carousel khác
        <div className='carousel-1' id='home'>
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
                {
                    movies &&
                    movies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <HeroBannerItem background={movie.backdrop_path} poster={movie.poster_path} id={movie.id} title={movie.title} overview={movie.overview} />
                        </SwiperSlide>
                    ))
                }

                <div className="slider-controler">
                    <div className=" swiper-button-prev slider-arrow border ">
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
