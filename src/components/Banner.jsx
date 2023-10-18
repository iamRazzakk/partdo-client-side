import { Component } from 'react';
import './Banner.css';

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }

    nextSlide = () => {
        console.log('Next button clicked');
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide + 1) % images.length,
        }));
    };

    prevSlide = () => {
        console.log('Previous button clicked');
        this.setState((prevState) => ({
            currentSlide:
                prevState.currentSlide === 0
                    ? images.length - 1
                    : prevState.currentSlide - 1,
        }));
    };



    render() {
        const { currentSlide } = this.state;
        return (
            <div className="carousel-container">
                <div className="carousel">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''
                                }`}
                        >
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="prev-button" onClick={this.prevSlide}>
                    Previous
                </button>
                <button className="next-button" onClick={this.nextSlide}>
                    Next
                </button>
            </div>
        );
    }
}

const images = [
    'slider-01.jpg',
    'slider-07.jpg',
    'slider-08.jpg',
    // Add more image paths here
];

export default MyCarousel;