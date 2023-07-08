import { useEffect, useState } from 'react'
import './App.css'
import { fetchDatafromApi } from './Utils/GetdatafromApi.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/home-slice';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

import { Home } from './pages/home/Home';
import { RootLayout } from './pages/RootLayout';
import { MoviePage } from './pages/MoviesPage/MoviePage';
import { Details } from './pages/details/Details';
import { SearchResult } from './pages/searchResult/SearchResult';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/FilmFinder/movie',
        children: [
          {
            index: true,
            element: <MoviePage />
          },
          {
            path: '/FilmFinder/movie/:id',
            element: <Details />
          }
        ]
      }, {
        path: "/search/:query",
        element: <SearchResult />
      }
    ]
  }
])
function App() {



  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
  }, [])

  // bắn Api giúp config ảnh cho phù hợp vì ảnh có nhiều size
  const fetchApiConfig = () => {
    fetchDatafromApi("/configuration")
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.base_url + "original",
          poster: res.images.base_url + "original",
          profile: res.images.base_url + "original",
        }
        dispatch(getApiConfiguration(url))
      });
  }

  return <RouterProvider router={router} />

}

export default App
