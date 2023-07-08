import React from 'react'
import { HeroBanner } from '../../components/HeroBanner/HeroBanner'
import { Trending } from './Trending/Trending'

export const Home = () => {
    return (
        <div >
            <HeroBanner />
            <Trending />
        </div>
    )
}
