export default function Card({image, title, number}) {

    // Function to flip a project card
    function toggleFlip(evt){
        evt.classList.toggle('flip-card');
    }

    return (
        <>
            {/* 1 Card */}
                <div className="card relative overflow-hidden">
                    <div className="front" onClick={(evt) => {toggleFlip(evt.target)}}>
                    <img className="transform hover:scale-125 hover:opacity-50 transition duration-2000 ease-out-" src={image} alt={title} />
                    <div className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">{number}</div>
                    </div>
                    <div className="back" onClick={(evt) => {toggleFlip(evt.target)}}>
                        <div className="description">
                            <div className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                                {title}
                            </div>
                            blah blah blah
                        </div>
                    </div>
                </div>
        </>
    )
};