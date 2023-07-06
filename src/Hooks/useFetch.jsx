import React, { useEffect, useState } from 'react'
import { fetchDatafromApi } from '../Utils/GetdatafromApi';

const useFetch = (url) => {
    const [Loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData(null)
        fetchDatafromApi(url)
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                setError(true);
            })
    }, [url])
    return { data, Loading, error };
}

export default useFetch;