import React, { useEffect, useState } from 'react'
import { SwitchTabs } from '../../../components/SwitchTab/SwitchTabs'


import useFetch from '../../../Hooks/useFetch'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { BtnCategory } from '../../../components/Button/BtnCategory';
import { CategoryItem } from '../../../components/Category/CategoryItem';
export const Category = ({ type, title }) => {

    const [endpoint, setEndPoint] = useState("movie")
    const [movies, setMovies] = useState([])
    const { data, loading } = useFetch(`/${endpoint}/${type}?language=en-US&page=1`)
    console.log(data)
    useEffect(() => {
        if (data) {
            setMovies(data.results)
            console.log(movies?.title)
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
    return (
        <div className='px-4 ' id={type}>
            <div className='flex items-center justify-between mb-[30px] px-10'>
                <BtnCategory title={title} />
                <SwitchTabs data={["Movies", "TVshows"]} onTabChange={onTabChange} />
            </div>
            {
                movies &&

                <div className='px-20'>
                    <Swiper
                        breakpoints={breakpoints}
                    >
                        {movies.map((movie, index) => (
                            <SwiperSlide key={index}   >
                                <CategoryItem pathPoster={movie?.poster_path} voteAverage={movie?.vote_average} date={movie?.release_date} title={movie?.title} genreIds={movie?.genre_ids} />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            }

        </div>
    )
}
