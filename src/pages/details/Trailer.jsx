import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import { BtnCategory } from '../../components/Button/BtnCategory';

export const Trailer = ({ id, mediaType }) => {
    const [trailer, setTrailer] = useState();
    const data = useFetch(`/${mediaType}/${id}/videos?language=en-US`)
    useEffect(() => {
        if (data) {
            const Trailers = data?.data?.results?.filter((result) => result.name.includes("Official") && result.type === "Trailer")
            console.log(Trailers)
            if (Trailers && Trailers.length > 0) {
                setTrailer(Trailers[0].key)
            }
        }
    }, [data])
    return (
        <div className=''>
            <BtnCategory title={'Trailer'} />
            <div className='px-5 mt-6'>
                <iframe
                    src={`https://www.youtube.com/embed/${trailer}`}
                    width='100%'
                    height={'600px'}
                    title='Teaser'
                ></iframe>
            </div>
        </div>
    )
}
