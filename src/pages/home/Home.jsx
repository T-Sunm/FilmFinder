import React, { useEffect } from 'react'
import { HeroBanner } from '../../components/HeroBanner/HeroBanner'
import { Trending } from './Trending/Trending'

import { Footer } from '../../components/Footer/Footer'
import { Category } from './Category/Category'
import { SideSmoothScroll } from './SideSmoothScroll/SideSmoothScroll'


export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='h-[100px]' >
            <HeroBanner />
            <Trending />
            <Category type={'popular'} title={"What's popular"} />
            <Category type={'top_rated'} title={"Top Rated"} />
            <SideSmoothScroll />
            <Footer />
        </div>
    )
}
