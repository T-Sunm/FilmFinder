import React from 'react'
import { useSelector } from 'react-redux'
import { CastList } from './CastList'
import { useSpring, animated } from 'react-spring';

export const Detailsbanner = ({ urlBackdrop, pathBackDrop, urlPoster, pathPoster, title, tagLine, Genres, overview, status, id, mediaType, runtime, release, voteAverage = 0 }) => {

    const changeTimeHour = Math.floor(runtime / 60);
    const changeMinutes = runtime % 60;

    const Year = release?.split('-')[0]

    var originalNumber = voteAverage;
    var roundedNumber = parseFloat(originalNumber.toFixed(1)) * 10

    // set animation cho số
    const props = useSpring({ voteAverage: roundedNumber, from: { voteAverage: 0 } })


    return (
        <div className='relative
        flex
        gap-10
        justify-center
        items-center
      w-full
      bg-no-repeat
      bg-cover
      h-[90vh]
      bg-center
      before:content-[""]
      before:absolute
      before:top-0
      before:left-0
      before:w-full
      before:h-full
      before:bg-overlay
      after:content-[""]
      after:absolute
      after:bottom-0
      after:left-0
      after:w-full
      after:h-[100px]
      after:bg-gradient-to-t from-bg_black to-transparent' style={{ backgroundImage: `url(${urlBackdrop + pathBackDrop})` }}>
            <div className='w-[20%] relative min-w-[270px]'>
                <img src={`${urlPoster + pathPoster}`} className='rounded-lg' />
            </div>
            <div className='w-[60%] relative'>
                <h1 className='text-3xl'>
                    {title} ({Year})
                </h1>
                <p className='italic my-2'>{tagLine}</p>
                <div className='flex items-center'>
                    <div className='my-3 flex gap-5 items-center'>
                        <animated.div className={`radial-progress bg-transparent ${voteAverage >= 7 ? 'text-success' : voteAverage < 7 && voteAverage > 5 ? "text-warning" : 'text-error'} border-1 flex justify-center items-center`}
                            style={{ "--value": props.voteAverage.to((val) => Math.floor(val)), "--size": "4rem", "--thickness": "2px" }}>
                            <animated.span>{props.voteAverage.to((val) => Math.floor(val))}</animated.span> %
                        </animated.div>
                        <div className='h-[50%] flex gap-3 border-l-4 pl-4'>
                            {Genres &&
                                Genres.map((item, key) => (
                                    <div key={key} className='font-semibold rounded-md flex items-center '>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {
                    runtime ? <span className='text-sm font-semibold'>{changeTimeHour + ' hr ' + changeMinutes + ' m '}</span>
                        :
                        <span className='text-sm font-semibold'>Run time : not update</span>
                }
                <div>
                    <h1 className='text-xl font-medium'>
                        Overview
                    </h1>
                    <p className='my-2'>
                        {overview}
                    </p>
                </div>
                <div className='flex my-4'>
                    <h1 className='font-semibold '>Status:</h1>
                    <p className='ml-2'>{status}</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold mb-2'>Cast</h1>
                    <CastList id={id} mediaType={mediaType} />
                </div>
            </div>
        </div>
    )
}
