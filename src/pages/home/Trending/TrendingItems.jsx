import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { useSpring, animated } from 'react-spring';

export const TrendingItems = ({ pathPoster, voteAverage, date, title, genreIds }) => {

    const { url, genres } = useSelector((state) => state.home)
    const postUrl = url.poster + pathPoster

    date = dayjs(date);
    let formattedDate = date.format('MMMM D, YYYY');

    var originalNumber = voteAverage;
    var roundedNumber = parseFloat(originalNumber.toFixed(1)) * 10

    // set animation cho số
    const props = useSpring({ voteAverage: roundedNumber, from: { voteAverage: 0 } })

    const genresItems = genres?.genres?.filter(genre => genreIds.includes(genre.id)).slice(0, 2)
    return (
        <div className=' h-[400px] '>
            <div className='relative'>
                <img src={postUrl} alt="" className='rounded-md w-[220px]' />
                <animated.div
                    className="radial-progress absolute bottom-[-16px] text-success flex justify-center items-center"
                    style={{ "--value": props.voteAverage.to((val) => Math.floor(val)), "--size": "3rem" }}>
                    <animated.span>{props.voteAverage.to((val) => Math.floor(val))}</animated.span> %
                </animated.div>
                <div className='absolute bottom-1 right-2 w-[75%] flex flex-wrap justify-end gap-2'>
                    {genresItems &&
                        genresItems.map((item, key) => (
                            <div key={key} className='bg-pink-600 inline-block rounded-md text-center p-1'>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-3 mt-6'>
                <h1 className='mb-2 truncate '>{title}</h1>
                <p className='text-[13px]'>{formattedDate}</p>
            </div>
        </div>
    )
}
