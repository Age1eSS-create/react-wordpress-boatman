import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import { Link } from "react-router-dom";

const Carousel = ({ flag = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(4)
    const images = [
        { img: '/banner1.png', mobl: 'mBaner1.jpg' ,title: 'Actor', subtitle: 'Компактность и доступность в сочетании с полным функционалом' },
        { img: '/banner2.png', mobl: 'mBaner2.jpg',title: 'ACTOR PLUS', subtitle: 'Увеличенный объем контейнера и современный пульт управления' },
        { img: '/banner3.png',mobl: 'mBaner3.jpg' ,title: 'Fighter', subtitle: 'Усовершенствованный эхолот  и агрессивный дизайн' },
        { img: '/banner4.png', mobl: 'mBaner4.jpg',title: 'Leader', subtitle: 'Непревзойденная устойчивость и максимальная грузоподъемность' },
    ]
    const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 580) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    },[])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className='carousel-container'>
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87166 12.7547L0.85403 11.8227L-5.79811e-07 12.7355L0.83462 13.6675L1.87166 12.7547ZM0.83462 13.6647L11.9259 26L14 24.1799L2.90869 11.8446L0.83462 13.6647ZM2.88651 13.6867L13.9778 1.864L11.9453 -5.22147e-07L0.85403 11.8227L2.88928 13.6867L2.88651 13.6867Z" fill="white" />
                        </svg>
                    </button>}
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((item, key) => (
                            <div className='content-info'>
                                <img src={isMobile ? item.mobl : item.img} />
                                <p className='series'>серия</p>
                                <h2 className='title'>{item.title}</h2>
                                <p className='subtitle'>{item.subtitle}</p>
                                <div className='buttons'>
                                    <Link to={'/series/' + currentIndex} className='button'>Узнать больше</Link>
                                    <Link to={'/card/' + currentIndex} className='button button-black'>Купить</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {flag && <div className='sliderDown'>
                    <div className='slider-item' style={currentIndex == 0 ? { backgroundColor: '#E60013' } : {}}></div>
                    <div className='slider-item' style={currentIndex == 1 ? { backgroundColor: '#E60013' } : {}}></div>
                    <div className='slider-item' style={currentIndex == 2 ? { backgroundColor: '#E60013' } : {}}></div>
                    <div className='slider-item' style={currentIndex == 3 ? { backgroundColor: '#E60013' } : {}}></div>
                </div>}
                {/* You can alwas change the content of the button to other things */}
                {currentIndex < (length - 1) &&
                    <button onClick={next} className="right-arrow">
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1283 13.2453L13.146 14.1773L14 13.2645L13.1654 12.3325L12.1283 13.2453ZM13.1654 12.3353L2.07407 -5.21299e-07L-7.95607e-08 1.82014L11.0913 14.1554L13.1654 12.3353ZM11.1135 12.3133L0.0221805 24.136L2.05466 26L13.146 14.1773L11.1107 12.3133L11.1135 12.3133Z" fill="white" />
                        </svg>
                    </button>}
            </div>
        </div>
    );
}

export default Carousel;
