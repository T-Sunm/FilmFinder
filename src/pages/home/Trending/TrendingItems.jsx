import React from 'react'
import { useSelector } from 'react-redux'

export const TrendingItems = ({ pathPoster, voteAverage, date, title }) => {

    const { url } = useSelector((state) => state.url.poster)
    return (
        <div>
            {pathPoster}
            hihi
        </div>
    )
}
