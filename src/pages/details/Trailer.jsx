import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import { BtnCategory } from '../../components/Button/BtnCategory';

export const Trailer = ({ id }) => {
    const [trailer, setTrailer] = useState();
    const data = useFetch(`/movie/${id}/videos?language=en-US`)
    useEffect(() => {
        if (data) {
            const Trailers = data?.data?.results?.filter((result) => result.name === "Official Trailer" && result.type === "Trailer")
            console.log(Trailers)
            if (Trailers && Trailers.length > 0) {
                setTrailer(Trailers[0].key)
                console.log(trailer)
            }
        }
    }, [data])
    return (
        <div>
            <BtnCategory title={'Trailer'} />
            <iframe
                src={`https://www.youtube.com/embed/${trailer}`}
                width='100%'
                height={'600px'}
                title='Teaser'
            ></iframe>
        </div>
    )
}
