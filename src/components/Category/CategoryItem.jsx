import dayjs from 'dayjs';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export const CategoryItem = ({ pathPoster, voteAverage, date, title, genreIds, id, mediaType }) => {
    const { url, genres } = useSelector((state) => state.home)
    const postUrl = url.poster + pathPoster

    date = dayjs(date);
    let formattedDate = date.format('MMMM D, YYYY');

    var originalNumber = voteAverage || 0;
    var roundedNumber = parseFloat(originalNumber.toFixed(1)) * 10

    // set animation cho số
    const props = useSpring({ voteAverage: roundedNumber, from: { voteAverage: 0 } })

    const genresItems = genres?.genres?.filter(genre => genreIds?.includes(genre.id)).slice(0, 2)
    return (
        <Link to={`/FilmFinder/${mediaType}/${id}`} >
            <div className=' h-[400px] '>
                <div className='relative'>
                    <img src={postUrl} alt="" className='rounded-md w-[220px]' />
                    <animated.div
                        className="radial-progress absolute bottom-[-16px] text-success flex justify-center items-center"
                        style={{ "--value": props.voteAverage.to((val) => Math.floor(val)), "--size": "3rem" }}>
                        <animated.span>{props.voteAverage.to((val) => Math.floor(val))}</animated.span> %
                    </animated.div>
                    <div className='absolute bottom-1 right-3 w-[75%] flex flex-wrap justify-end gap-2'>
                        {genresItems &&
                            genresItems.map((item, key) => (
                                <div key={key} className='bg-pink-600 inline-block rounded-md text-center py-[1px] px-2'>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    <div className="dropdown dropdown-hover dropdown-end absolute top-2 right-3 cursor-pointer">
                        <label tabIndex={0} className="w-6 h-6 flex justify-center items-center bg-base-100 rounded-full cursor-pointer"><span className='pb-2'>...</span></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-32">
                            <li><a>View More</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mb-3 mt-6'>
                    <h1 className='mb-2 truncate '>{title}</h1>
                    <p className='text-[13px]'>{formattedDate}</p>
                </div>
            </div>
        </Link>
    )
}
