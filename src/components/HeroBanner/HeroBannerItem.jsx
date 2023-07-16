import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Hero.css'
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';

export const HeroBannerItem = ({ background, poster, id, title, overview }) => {

    const { data } = useFetch(`/movie/${id}/videos?language=en-US`)
    const [ytTrailer, setYtTrailer] = useState();
    const { theme } = useSelector((state) => state.theme)

    useEffect(() => {
        if (data && Array.isArray(data.results)) {
            const Trailer = data.results.filter(
                (movie) => movie.site === 'YouTube' && movie.name === "Official Trailer"
            )
            if (Trailer && Array.isArray(Trailer)) {
                setYtTrailer(Trailer[0]?.key)
            }

        }

    }, [data])
    return (
        <>
            <div
                className={`relative 
                w-full
                bg-no-repeat
                bg-cover
                bg-center 
                h-[80%] 
                before:content-[""] 
                before:absolute 
                before:top-0 
                before:left-0 
                before:w-full 
                before:h-full 
                
                ${theme === 'black' ? 'before:bg-overlay' : 'before:bg-white_opacity_80'}
                after:absolute 
                after:content-[""] 
                after:bottom-0 
                after:left-0 
                after:w-full 
                after:h-[100px] 
                after:bg-gradient-to-t ${theme === 'black' ? 'from-bg_black' : 'from-bg_white'} to-transparent
                
                reflect 
                ${theme === 'black' ? '' : 'active'}
                `}
                style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${background}')`,
                }}
            >
                <div className={`flex justify-center items-center relative px-4 sm:px-12 h-full ${theme === 'black' ? 'text-white' : 'text-black'}`}>
                    <div className='w-full md:w-[60%] px-2 sm:px-12 lg:pl-28'>
                        <h2 className='font-montserrat  font-bold text-3xl sm:text-4xl text-center md:text-left'>
                            {title}
                        </h2>
                        <div className='font-montserrat font-normal  mt-7 md:mt-7 text-center md:text-left'>
                            {overview}
                        </div>
                        <div className='mt-7 md:mt-12 flex justify-center md:justify-start gap-3 sm:gap-5'>
                            <button
                                className={
                                    'btn glass '
                                }
                            >
                                <Link to={`/ReelHub/movie/${id}`}>Details</Link>
                            </button>
                            <Button
                                className={'bg-transparent border-2 border-white text-xl'}
                            >
                                <a
                                    href={`https://www.youtube.com/watch?v=${ytTrailer}`}
                                    target='_blank'
                                >
                                    Trailer
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className='md:flex-1 flex justify-center items-start'>
                        <img
                            src={`https://image.tmdb.org/t/p/w342${poster}`}
                            alt=''
                            className='hidden md:inline-block rounded-xl drop-shadow-2xl bg-cover'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
