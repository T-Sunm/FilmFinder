import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { Detailsbanner } from '../../components/Details/Detailsbanner';
import { Trailer } from './Trailer';
import Footer from '../../components/footer/Footer';

export const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}?language=en-US`)

    const { url } = useSelector((state) => state.home)
    console.log(data)
    return (

        <div className='w-full h-[100vh]'>
            <Detailsbanner
                urlBackdrop={url?.backdrop}
                pathBackDrop={data?.backdrop_path}
                urlPoster={url?.poster}
                pathPoster={data?.poster_path}
                title={data?.title}
                tagLine={data?.tagline}
                Genres={data?.genres}
                overview={data?.overview}
                status={data?.status}
                id={id}
                mediaType={mediaType}
                runtime={data?.runtime}
                release={data?.release_date}
            />
            <Trailer id={id} />
            <Footer />
        </div>
    )
}
