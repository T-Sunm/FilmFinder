import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { CategoryItem } from '../../components/Category/CategoryItem'
import { BtnLoadmore } from '../../components/Button/BtnLoadmore'
import noPoster from '../../assets/no-poster.png'
import Footer from '../../components/footer/Footer'
export const SearchResult = () => {

    const [results, setResults] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const { query } = useParams();

    const { data, Loading } = useFetch(`/search/multi?query=${query}&page=${pageNum}`)

    useEffect(() => {
        if (data?.results) {
            setResults(prevResults => [...prevResults, ...data.results]);
            console.log(results)
        }
    }, [data])

    const nextPage = useCallback(() => {
        setPageNum(prev => prev + 1)
    }, [])
    return (
        <>
            <div className='w-full h-[0] '>
                <div className='pt-[90px] px-[97px]'>
                    <h1 className='text-[36px] font-semibold mb-5'>Search results of '{query}' :</h1>
                    <div className='flex flex-col items-center justify-center '>

                        <div className="text-white grid grid-cols-6">
                            {
                                data &&
                                results.map((movie, key) => (
                                    movie.poster_path ?
                                        <CategoryItem key={key} pathPoster={movie?.poster_path} voteAverage={movie?.vote_average} date={movie?.release_date} title={movie?.title} genreIds={movie?.genre_ids} />
                                        : <img src={noPoster} className='rounded-md w-[220px]' />
                                ))

                            }
                        </div>
                        <BtnLoadmore onNext={nextPage} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
