import { useState, useEffect } from "react";

const Carousel = () => {
    const slides = [
        {
            heading: "Slide 1",
            text: "This is the first slide.",
            buttonText: "Learn More",
            imageUrl: "https://via.placeholder.com/800x400/0000FF/808080?text=Slide+1",
        },
        {
            heading: "Slide 2",
            text: "This is the second slide.",
            buttonText: "Discover More",
            imageUrl: "https://via.placeholder.com/800x400/FF0000/808080?text=Slide+2",
        },
        {
            heading: "Slide 3",
            text: "This is the third slide.",
            buttonText: "Explore Now",
            imageUrl: "https://via.placeholder.com/800x400/00FF00/808080?text=Slide+3",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(autoSlide); // Cleanup on component unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold">{slides[currentIndex].heading}</h2>
                        <p className="mt-4">{slides[currentIndex].text}</p>
                        <button className="mt-6 px-6 py-2 bg-blue-600 rounded-full text-white">{slides[currentIndex].buttonText}</button>
                    </div>
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                onClick={prevSlide}
            >
                &#60;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                onClick={nextSlide}
            >
                &#62;
            </button>
        </div>
    );
};

export default Carousel;
