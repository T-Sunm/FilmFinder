import React, { useEffect, useState } from 'react'
import Select from "react-select";
import { CategoryItem } from '../../components/Category/CategoryItem';
import { fetchDatafromApi } from '../../Utils/GetdatafromApi';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import './Explore.scss'
import { CateGoryItemLoading } from '../../components/Category/CateGoryItemLoading';

let filters = {};

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    {
        value: "primary_release_date.desc",
        label: "Release Date Descending",
    },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];


export const Explore = () => {

    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
    const { mediaType } = useParams();

    const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

    const fetchInitialData = () => {
        setLoading(true);
        fetchDatafromApi(`/discover/${mediaType}`, filters).then((res) => {
            setTimeout(() => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }, 700)
        });
    };
    // const fetchNextPageData = () => {
    //     fetchDatafromApi(
    //         `/discover/${mediaType}?page=${pageNum}`,
    //         filters
    //     ).then((res) => {
    //         if (data?.results) {
    //             setData({
    //                 ...data,
    //                 results: [...data?.results, ...res.results],
    //             });
    //         } else {
    //             setData(res);
    //         }
    //         setPageNum((prev) => prev + 1);
    //     });
    // };

    useEffect(() => {
        filters = {};
        setData(null);
        setPageNum(1);
        setSortby(null);
        setGenre(null);
        fetchInitialData();
    }, [mediaType]);

    const onChange = (selectedItems, action) => {
        if (action.name === "sortby") {
            setSortby(selectedItems);
            if (action.action !== "clear") {
                filters.sort_by = selectedItems.value;
            } else {
                delete filters.sort_by;
            }
        }

        if (action.name === "genres") {
            setGenre(selectedItems);
            if (action.action !== "clear") {
                let genreId = selectedItems.map((g) => g.id);
                genreId = JSON.stringify(genreId).slice(1, -1);
                filters.with_genres = genreId;
            } else {
                delete filters.with_genres;
            }
        }

        setPageNum(1);
        fetchInitialData();
    };

    return (
        <>
            <div className="explorePage ">
                <div className="pageHeader">
                    <div className="pageTitle">
                        {mediaType === "tv"
                            ? "Explore TV Shows"
                            : "Explore Movies"}
                    </div>
                    <div className="filters">
                        <Select
                            isMulti
                            name="genres"
                            value={genre}
                            closeMenuOnSelect={false}
                            options={genresData?.genres}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.id}
                            onChange={onChange}
                            placeholder="Select genres"
                            className="react-select-container genresDD"
                            classNamePrefix="react-select"
                        />
                        <Select
                            name="sortby"
                            value={sortby}
                            options={sortbyData}
                            onChange={onChange}
                            isClearable={true}
                            placeholder="Sort by"
                            className="react-select-container sortbyDD"
                            classNamePrefix="react-select"
                        />
                    </div>
                </div>
                {!loading && (
                    <div className='grid gap-3 grid-cols-6 px-[84px] mobile:px-2 laptop:grid-cols-5 tablet:grid-cols-4 mobile:grid-cols-3'>
                        {data?.results?.length > 0 ? (
                            data.results.map((movie, key) => (
                                <CategoryItem key={key} pathPoster={movie?.poster_path} voteAverage={movie?.vote_average} date={movie?.release_date} title={movie?.title} genreIds={movie?.genre_ids} />
                            ))
                        ) : (
                            <span className="resultNotFound">
                                Sorry, Results not found!
                            </span>
                        )}
                    </div>
                )}
                {loading && (
                    <div className='grid grid-cols-6 px-[84px] gap-4'>
                        {Array(12).fill(0).map((item, i) => (
                            <div className='w-[220px] h-[300px]'>
                                <CateGoryItemLoading />
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    )
}
