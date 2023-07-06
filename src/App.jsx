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

  return <RouterProvider router={router} />

}

export default App
