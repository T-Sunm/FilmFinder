import React, { useEffect, useState } from 'react'
import { SwitchTabs } from '../../../components/SwitchTab/SwitchTabs'


import useFetch from '../../../Hooks/useFetch'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TrendingItems } from './TrendingItems';
export const Trending = () => {

    const [endpoint, setEndPoint] = useState("day")
    const [movies, setMovies] = useState([])
    const { data, loading } = useFetch(`/trending/movie/${endpoint}?language=en-US`)
    console.log(data)
    useEffect(() => {
        if (data) {
            setMovies(data.results)
            console.log(movies)
        }
    }, [data])
    const onTabChange = (tab) => {
        const lowerCaseStr = tab.toLowerCase();
        setEndPoint(lowerCaseStr)
    }
    return (
        <div>
            <div className='flex justify-between px-4 mt-2'>
                <p className='text-[20px] pl-[20px]'>Trending</p>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <TrendingItems pathPoster={movies[0].poster_path} voteAverage={movies[0]?.vote_average} date={movies[0]?.release_date} title={movies[0]?.title} />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
