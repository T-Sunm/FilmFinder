import React from 'react'
import { HeroBanner } from '../../components/HeroBanner/HeroBanner'
import { Trending } from './Trending/Trending'

import Footer from '../../components/footer/footer'
import Footer2 from '../../components/footer/Footer2'
import { Category } from './Category/Category'


export const Home = () => {
    return (
        <div className='h-[100vh]' >
            <HeroBanner />
            <Trending />
            <Category type={'popular'} title={"What's popular"} />
            <Category type={'top_rated'} title={"Top Rated"} />
            <Footer2 />
        </div>
    )
}
