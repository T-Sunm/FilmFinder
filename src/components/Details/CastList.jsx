import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { CateGoryItemLoading } from '../Category/CateGoryItemLoading';

export const CastList = ({ id, mediaType }) => {
    const [casts, setCasts] = useState([]);
    const data = useFetch(`/${mediaType}/${id}/credits?language=en-US`)
    const { url } = useSelector((state) => state.home)
    useEffect(() => {
        setCasts(data?.data?.cast);
    })
    const breakpoints = {
        // Hiển thị 3 slide trên viewport nhỏ hơn 640px
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        580: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        680: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        // Hiển thị 4 slide trên viewport từ 768px đến 1024px
        768: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        868: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        968: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        // Hiển thị 6 slide trên viewport lớn hơn 1024px
        1024: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
        1124: {
            slidesPerView: 6,
            spaceBetween: 6,
        },
    };
    return (

        <div className=''>
            {casts &&
                <Swiper
                    breakpoints={breakpoints}
                >
                    {casts.map((cast, index) => (
                        <SwiperSlide key={index}   >
                            <div className='flex flex-col gap-2'>
                                <img src={`${url.profile + cast.profile_path}`} className='rounded-lg' />
                                {cast.name}
                                <p className='text-xs'>{cast.character}</p>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            }

        </div>
    )
}
