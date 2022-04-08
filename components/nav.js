import { useState, useEffect } from "react"
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import allData from '@data/data'

export default function Navigation() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])


    return (
        <div className={`w-full py-2 bg-white md:py-5 dark:bg-dark`}>

            {/* Navbar */}
            <nav className="max-w-6xl mx-auto flex tablet:flex-row md:flex-row lg:flex-row justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <a>
                            {mounted && theme === "dark" ? (
                                <img src="img/logo-darkTheme.svg" alt="Logo" 
                                className="w-logo h-logo py-0" />
                            ) : (
                                <img src="img/logo-lightTheme.svg" alt="Logo" className="w-logo h-logo py-0" />
                            )}
                        </a>
                    </Link>
                <div className="flex-col -ml-5">
                        <p className="font-semibold text-xl text-lightThemeText dark:text-darkThemeText">
                            {allData.fullName}
                        </p>
                        <p className="text-base font-light text-lightThemeText dark:text-darkThemeText">
                            {allData.iAm}
                        </p>
                    </div>
                </div>

                <div className="space-x-8 hidden text-center items-center tablet:hidden md:flex md:space-x-5 lg:flex lg:space-x-8">
                    <Link href="/">   
                        <a className={router.pathname === "/" ? "text-lightThemeText dark:text-white active dark:active" : "navLink hover:navLinkHover text-lightThemeText dark:text-white"}>Home</a>
                    </Link>
                    <Link href="/about">   
                        <a className={router.pathname === "/about" ? "text-lightThemeText dark:text-white active dark:active" : "navLink hover:navLinkHover text-lightThemeText dark:text-white"}>A Propos</a>
                    </Link>
                    <Link href="/experiences">
                        <a className={router.pathname === "/experiences" ? "text-lightThemeText dark:text-white active dark:active" : "navLink hover:navLinkHover text-lightThemeText dark:text-white"}>
                            Parcours
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={router.pathname === "/projects" ? "text-lightThemeText dark:text-white active dark:active" : "navLink hover:navLinkHover text-lightThemeText dark:text-white"}>Projets</a>
                    </Link>
                </div>
                <div className="space-x-4 flex flex-row hidden items-center tablet:hidden md:hidden lg:block lg:flex">
                <a
                    href={allData.socialLinks.linkedin}
                    className="text-base font-normal icon hover:iconHover text-lightThemeText dark:text-darkThemeText"
                    target="_blank" rel="noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor"
                    className="bi bi-linkedin h-8 w-8" 
                    viewBox="0 0 512 512" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}>
                        {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                <a
                    href={allData.socialLinks.twitter}
                    className="text-base font-normal icon hover:iconHover text-lightThemeText dark:text-darkThemeText"
                    target="_blank" rel="noreferrer"
                ><svg xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
                className="bi bi-twitter h-8 w-8" 
                viewBox="0 0 512 512" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}>
                    {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
                <a
                    href={`mailto:${allData.mail}`}
                    className="text-base font-normal icon hover:iconHover text-lightThemeText dark:text-darkThemeText"
                ><svg xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
                className="bi bi-twitter h-8 w-8" 
                viewBox="0 0 512 512" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}>
                   <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg></a>
                </div>

                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-10 h-10 p-3 mr-5 rounded focus:outline-none"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                                        {mounted && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        className="w-5 h-5 text-customYellow dark:text-customYellow"
                    >
                        {theme === "dark" ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                        )}
                    </svg>
                    )}
                </button>
            </nav>

            <div className="space-x-8 block text-center pb-5 tablet:block md:hidden lg:hidden mt-4">
                <Link href="/">
                <a className={router.pathname === "/" ? "text-lightThemeText dark:text-darkThemeText active dark:active" : "text-lightThemeText dark:text-darkThemeText"}>
                    Home
                </a>
                </Link>
                <Link href="/about">
                <a className={router.pathname === "/about" ? "text-lightThemeText dark:text-darkThemeText active dark:active" : "text-lightThemeText dark:text-darkThemeText"}>
                    About
                </a>
                </Link>
                <Link href="/experiences">
                    <a className={router.pathname === "/experiences" ? "text-lightThemeText dark:text-darkThemeText active dark:active" : "text-lightThemeText dark:text-darkThemeText"}>
                        Parcours
                    </a>
                </Link>
                <Link href="/projects">
                    <a className={router.pathname === "/projects" ? "text-lightThemeText dark:text-darkThemeText active dark:active" : "text-lightThemeText dark:text-darkThemeText"}>
                        Projets
                    </a>
                </Link>
            </div>
        </div>
    )
}