import allData from '../data/data';


export default function Footer() {

    return (
        <footer className="footer py-8 bg-white w-full dark:bg-dark">
            <div className="max-w-6xl mx-auto flex md:flex-row justify-around items-center">
            <div className="space-x-8 text-center md:flex">
                {/* Title */}
                <p className="flex gap-3 items-center text-lightThemeText dark:text-darkThemeText"><svg xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
                className="h-5 w-5" 
                viewBox="0 0 512 512" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}>
                {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM199.2 312.6c14.94 15.06 34.8 23.38 55.89 23.38c.0313 0 0 0 0 0c21.06 0 40.92-8.312 55.83-23.38c9.375-9.375 24.53-9.469 33.97-.1562c9.406 9.344 9.469 24.53 .1562 33.97c-24 24.22-55.95 37.56-89.95 37.56c0 0 .0313 0 0 0c-33.97 0-65.95-13.34-89.95-37.56c-49.44-49.88-49.44-131 0-180.9c24-24.22 55.98-37.56 89.95-37.56c.0313 0 0 0 0 0c34 0 65.95 13.34 89.95 37.56c9.312 9.438 9.25 24.62-.1562 33.97c-9.438 9.344-24.59 9.188-33.97-.1562c-14.91-15.06-34.77-23.38-55.83-23.38c0 0 .0313 0 0 0c-21.09 0-40.95 8.312-55.89 23.38C168.3 230.6 168.3 281.4 199.2 312.6z"/></svg> Tous droits réservés </p></div>

                <div className="flex flex-row text-lightThemeText dark:text-darkThemeText"><p className="fullName hover:fullNameHover">{allData.fullName}</p><p>- 2022</p></div>
                </div>
                <div className="flex justify-evenly md:justify-center md:gap-[4rem] items-center justify-center mt-10">
                    <a
                    href={`mailto:${allData.mail}`}
                    className="text-base font-normal icon hover:iconHover text-lightThemeText dark:text-darkThemeText"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill={"currentColor"}
                    className="bi bi-github h-7 w-7 md:h-9 md:w-9" 
                    viewBox="0 0 512 512" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}>
                        {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                    </a>
                    <a
                    href={allData.socialLinks.github}
                    className="text-base font-normal icon hover:iconHover text-lightThemeText dark:text-darkThemeText"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor"
                    className="bi bi-github h-7 w-7 md:h-9 md:w-9" 
                    viewBox="0 0 512 512" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}>
                        {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                    </a>
                    <a
                    href={allData.socialLinks.linkedin}
                    className="text-base font-normal icon hover:iconHover text-lightThemeText dark:text-darkThemeText"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor"
                    className="bi bi-linkedin h-7 w-7 md:h-9 md:w-9" 
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
                ><svg xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
                className="bi bi-twitter h-7 w-7 md:h-9 md:w-9" 
                viewBox="0 0 512 512" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}>
                    {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
                    </div>
        </footer>
    )
}