import { useEffect, useState } from 'react'
import './App.css'
import { fetchDatafromApi } from './Utils/GetdatafromApi.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/home-slice';

function App() {

  const dispatch = useDispatch();
  const { url, genres } = useSelector((state) => state.home)

  useEffect(() => {
    apiTestTing();
  }, [])

  const apiTestTing = () => {
    fetchDatafromApi("/movie/popular")
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res))
      });
  }
  return (
    <>
      <h2 className="text-3xl font-bold underline">
        Hello world!
      </h2>
    </>
  )
}

export default App
