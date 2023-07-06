import React, { useEffect, useState } from 'react'

export const SwapDarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const handleToogle = (e) => {
        // e trong hàm handleToogle chính là đối tượng sự kiện được tự động truyền vào 
        //khi sự kiện xảy ra. e.target chính là thẻ HTML gây ra sự kiện
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
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
