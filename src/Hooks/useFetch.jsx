import React, { useEffect, useState } from 'react'
import { fetchDatafromApi } from '../Utils/GetdatafromApi';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData(null)
        fetchDatafromApi(url)
            .then((res) => {
                setTimeout(() => {
                    setData(res)
                    setLoading(false)
                }, 800)

            })
            .catch((err) => {
                setLoading(false)
                setError(true);
            })
    }, [url])
    return { data, loading, error };
}

export default useFetch;