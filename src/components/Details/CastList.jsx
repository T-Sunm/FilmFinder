import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { CateGoryItemLoading } from '../Category/CateGoryItemLoading';
import { motion } from 'framer-motion';
import { Autoplay, Virtual, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        580: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        // Hiển thị 4 slide trên viewport từ 768px đến 1024px
        768: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        868: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
        968: {
            slidesPerView: 5,
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
    const cardVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
        }
    };
    return (

        <div className=''>
            {casts &&
                <Swiper
                    breakpoints={breakpoints}
                    modules={[Autoplay, Pagination, Virtual, Navigation]}
                    grabCursor={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop={true}
                    virtual
                >
                    {casts.map((cast, index) => (
                        <SwiperSlide key={index}   >
                            <motion.div
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ amount: 0.1 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className='flex flex-col gap-2'>
                                <img src={`${url.profile + cast.profile_path}`} className='rounded-lg mobile:w-[70px] w-[200px]' />
                                {cast.name}
                                <p className='text-xs mobile:text-[10px]'>{cast.character}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            }

        </div>
    )
}
