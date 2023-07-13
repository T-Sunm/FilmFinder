import React from 'react'
import { FaArrowTrendUp, FaPeopleGroup } from 'react-icons/fa6'
import { FcFilmReel } from 'react-icons/fc'
import { AiFillLike } from 'react-icons/ai'
import { Link } from 'react-scroll'
import './SideSmoothScroll.css'
export const SideSmoothScroll = () => {
    return (
        <div className=' top-[50%] flex flex-col codepen-button2 '>
            <div className='cursor-pointer mb-1'>
                <Link
                    to={'home'}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <FcFilmReel size={40} />
                </Link>
            </div>
            <div className='cursor-pointer mb-1'>
                <Link
                    to={'trending'}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <FaArrowTrendUp size={40} />
                </Link>
            </div>
            <div className='cursor-pointer mb-1'>
                <Link
                    to={'popular'}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <FaPeopleGroup size={40} />
                </Link>

            </div>
            <div className='cursor-pointer'>
                <Link
                    to={'top_rated'}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <AiFillLike size={40} />
                </Link>

            </div>
        </div>
    )
}
