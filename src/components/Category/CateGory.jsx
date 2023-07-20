import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import { BtnCategory } from '../Button/BtnCategory'
import { CategoryItem } from './CategoryItem'
import { CateGoryItemLoading } from './CateGoryItemLoading'


import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const CateGory = ({ type, title, id }) => {

    const [movies, setMovies] = useState([])
    const { data, loading } = useFetch(`/${type}/${id}/similar?language=en-US&page=1`)
    useEffect(() => {
        if (data) {
            setMovies(data.results)
        }
    }, [data])
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
        <div className='px-4 ' id='trending'>
            <div className='flex items-center mobile:justify-center mb-[30px] px-10 mobile:px-0'>
                <BtnCategory title={title} />
            </div>
            <div className='px-20'>
                {loading && !movies && (
                    <Swiper breakpoints={breakpoints}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}>
                        {Array(6).fill(0).map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className=' h-[300px]'>
                                    <CateGoryItemLoading />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                )}
                {!loading && movies &&
                    <Swiper breakpoints={breakpoints}>
                        {movies.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <CategoryItem type={type} pathPoster={movie?.poster_path} voteAverage={movie?.vote_average} date={movie?.release_date} title={movie?.title} genreIds={movie?.genre_ids} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                }
            </div>

        </div>
    )
}
