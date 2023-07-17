import React from 'react'
import LoadingSkeleton from '../Loading/LoadingSkeleton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CateGoryItemLoading } from '../Category/CateGoryItemLoading';

export const DetailtsBannerLoading = () => {
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
        <div className='relative
        flex
        gap-10
        justify-center
        items-center
        w-full
        h-[90vh]
      '>
            <div className='w-[20%] relative min-w-[270px]'>
                <LoadingSkeleton className='w-full h-[500px] rounded-lg' />
            </div>
            <div className='w-[60%] relative'>
                <LoadingSkeleton className='w-full h-[36px]' />
                <div className='flex items-center'>
                    <div className='my-3 flex gap-5 items-center'>
                        <div className="radial-progress bg-transparent text-primary-content border-1 flex justify-center items-center"
                            style={{ "--value": 100, "--size": "4rem", "--thickness": "2px" }}>
                            <span>??</span> %
                        </div>
                        <div className='h-[50%] flex gap-3 border-l-4 pl-4'>
                            <LoadingSkeleton className='w-[100px] h-[16px]' />
                            <LoadingSkeleton className='w-[100px] h-[16px]' />
                            <LoadingSkeleton className='w-[100px] h-[16px]' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-medium'>
                        Overview
                    </h1>
                    <LoadingSkeleton className='w-full h-[48px]' />
                </div>
                <div className='flex my-4'>
                    <h1 className='font-semibold '>Status:</h1>
                    <p className='ml-2'>??</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold mb-2'>Cast</h1>
                    <div className='flex gap-3'>
                        {Array(6).fill(0).map((item, i) => (

                            <div className='w-[220px] h-[230px]'>
                                <CateGoryItemLoading />
                            </div>

                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
