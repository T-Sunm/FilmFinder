import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/darkmode-slice';

export const SwapDarkMode = () => {

    const { theme } = useSelector((state) => state.theme)

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const handleToogle = (e) => {
        // e trong hàm handleToogle chính là đối tượng sự kiện được tự động truyền vào 
        //khi sự kiện xảy ra. e.target chính là thẻ HTML gây ra sự kiện
        if (e.target.checked) {
            dispatch(setTheme("white"))
        } else {
            dispatch(setTheme("black"))
        }
    }

    return (
        <input
            type="checkbox"
            className="toggle toggle-primary"
            onChange={handleToogle}
        />
    )
}
