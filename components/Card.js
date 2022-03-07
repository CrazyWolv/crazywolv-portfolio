export default function Card({image, title, number}) {
    return (
        <>
            {/* 1 Card */}
                <div className="relative overflow-hidden">
                    <img className="transform hover:scale-125 hover:opacity-50 transition duration-2000 ease-out-" src={image} alt={title} />
                    <div className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">{title}</div>
                    <div className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">{number}</div>
                </div>
        </>
    )
};