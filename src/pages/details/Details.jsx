import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { Detailsbanner } from '../../components/Details/Detailsbanner';
import Footer from '../../components/Footer/Footer';
import { CateGory } from '../../components/Category/CateGory';
import VideosSection from './VideoSection/VideoSections';
import { DetailtsBannerLoading } from '../../components/Details/DetailtsBannerLoading';

export const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}?language=en-US`)

    const { url } = useSelector((state) => state.home)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [data])
    return (
        <div className='w-full h-[100px]'>
            {data &&
                <Detailsbanner
                    urlBackdrop={url?.backdrop}
                    pathBackDrop={data?.backdrop_path}
                    urlPoster={url?.poster}
                    pathPoster={data?.poster_path}
                    title={data?.title || data?.name}
                    tagLine={data?.tagline}
                    Genres={data?.genres}
                    overview={data?.overview}
                    status={data?.status}
                    id={id}
                    mediaType={mediaType}
                    runtime={data?.runtime || ''}
                    release={data?.release_date || data?.first_air_date}
                    voteAverage={data?.vote_average}
                />

            }
            {!data &&
                <DetailtsBannerLoading />
            }
            <VideosSection id={id} mediaType={mediaType} loading={loading} />
            <CateGory type={mediaType} title={"More like this"} id={id} />
            <Footer />
        </div>
    )
}
