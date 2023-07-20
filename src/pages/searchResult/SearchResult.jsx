import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { CategoryItem } from '../../components/Category/CategoryItem'
import { BtnLoadmore } from '../../components/Button/BtnLoadmore'
import noPoster from '../../assets/no-poster.png'
import { Footer } from '../../components/Footer/Footer'
import { Loader } from '../../components/Loading/Loader'
export const SearchResult = () => {

    const [results, setResults] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const { query } = useParams();

    const { data, loading } = useFetch(`/search/multi?query=${query}&page=${pageNum}`)

    useEffect(() => {
        if (data?.results) {
            setResults(prevResults => [...prevResults, ...data.results]);
        }
    }, [data])

    const nextPage = () => {
        setPageNum(prev => prev + 1)
    }
    return (
        <>
            <div className='w-full h-[0] '>
                <div className='pt-[90px] px-[97px] mobile:px-2'>
                    <h1 className='text-[36px] font-semibold mb-5'>Search results of '{query}' :</h1>
                    <div className='flex flex-col items-center justify-center '>

                        <div className="text-white grid gap-3 grid-cols-6 laptop:grid-cols-5 tablet:grid-cols-4 mobile:grid-cols-3">
                            {!loading && data &&
                                results.map((movie, key) => (
                                    movie.poster_path &&
                                    <CategoryItem key={key} mediaType={movie?.media_type} id={movie?.id} pathPoster={movie?.poster_path} voteAverage={movie?.vote_average} date={movie?.release_date} title={movie?.title} genreIds={movie?.genre_ids} />
                                ))

                            }
                        </div>
                        {loading && !data &&
                            <Loader />
                        }
                        <BtnLoadmore onNext={nextPage} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
