import React from 'react'
import { Header } from '../components/header/header'
import { Outlet } from 'react-router-dom';
export const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
