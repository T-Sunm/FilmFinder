import React, { useEffect, useState } from 'react'
import { SwitchTabs } from '../../../components/SwitchTab/SwitchTabs'
import { motion } from 'framer-motion';

import useFetch from '../../../Hooks/useFetch'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Virtual, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { BtnCategory } from '../../../components/Button/BtnCategory';
import { CategoryItem } from '../../../components/Category/CategoryItem';
import { CateGoryItemLoading } from '../../../components/Category/CateGoryItemLoading';
export const Category = ({ type, title }) => {

    const [endpoint, setEndPoint] = useState("movie")
    const [movies, setMovies] = useState([])
    const { data, loading } = useFetch(`/${endpoint}/${type}?language=en-US&page=1`)
    useEffect(() => {
        if (data) {
            setMovies(data.results)
        }
    }, [data])
    const onTabChange = (tab) => {
        setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
    }
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
    const cardVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
        }
    };

    return (
        <div className='px-4 ' id={type}>
            <div className='flex items-center justify-between mb-[30px] px-10 mobile:px-0'>
                <BtnCategory title={title} />
                <SwitchTabs data={["Movies", "TVshows"]} onTabChange={onTabChange} />
            </div>
            <div className='px-20'>
                {!loading && movies &&
                    <Swiper
                        breakpoints={breakpoints}
                        modules={[Autoplay, Virtual, Scrollbar]}
                        scrollbar={{ draggable: true }}
                        grabCursor={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop={true}
                        virtual
                    >
                        {movies.map((movie, index) => (
                            <SwiperSlide key={index}   >
                                <motion.div
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ amount: 0.1 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    <CategoryItem mediaType={endpoint} id={movie.id} pathPoster={movie?.poster_path} voteAverage={movie?.vote_average} date={movie?.release_date} title={movie?.title} genreIds={movie?.genre_ids} />
                                </motion.div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                }
                {loading && !movies &&
                    <Swiper breakpoints={breakpoints}>
                        {Array(6).fill(0).map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className=' h-[300px]'>
                                    <CateGoryItemLoading />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                }
            </div>

        </div>
    )
}
