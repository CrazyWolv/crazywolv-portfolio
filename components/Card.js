export default function Card({image, title, number}) {

    // Function to flip a project card
    function toggleFlip(evt){
        evt.classList.toggle('flip-card');
    }

    return (
        <>
            {/* 1 Card */}
            <div className="bg-transparent relative cursor-pointer rounded-md group perspective-1000">
                    <div className="card preserve-3D relative overflow-hidden rounded-md w-full h-full duration-1000" onClick={(evt) => {toggleFlip(evt.currentTarget)}}>
                        <div className="back preserve-3D absolute w-full h-full backface-hidden bg-secondary">
                                <div className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                                    {title}
                                </div>
                                <div className="absolute top-20 left-10">
                                    blah blah blah
                                </div>
                        </div>
                        <div className="front w-full h-full rounded-md backface-hidden">
                            <p className="bottom-5 left-5 md:bottom-10 md:left-10 font-bold text-xl bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center absolute">{number}</p>
                            <img src={image} alt={title} className="w-full h-full rounded-md" />
                        </div>
                    </div>
                </div>
        </>
    )
};