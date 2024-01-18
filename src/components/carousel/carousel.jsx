import React, { useState } from 'react';
import {TransitionGroup} from "react-transition-group";
import './carousel.css';

const images = [
    'image1.jpg',
    'image2.jpg',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Předchozí</button>
            <TransitionGroup className="carousel-slide">
                <csstransition key="{index}" timeout="{500}" class="slide">
                    <img className="carousel-img" src={images[index]} alt={`Slide ${index + 1}   `} />
                </csstransition>
            </TransitionGroup>
            <button onClick={nextSlide}>Další</button>
        </div>
    );
}

export default Carousel;