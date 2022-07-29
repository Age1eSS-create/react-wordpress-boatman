import React, { useState, useEffect } from 'react';
import './CarouselAuto.scss';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';

const CarouselAuto = () => {
    const images = [
        { img: '/auto1.png', title: 'НАЙДИТЕ САМУЮ ПЕРСПЕКТИВНУЮ ТОЧКУ', subtitle: 'Исследуйте водоем с помощью встроенного эхолота с цветным дисплеем высокого разрешения. Дальность соединения с корабликом - 500 м, с эхолотом - 300 м' },
        { img: '/auto2.png', title: 'ЗАКОРМИТЕ ВЫБРАННОЕ МЕСТО ЛОВЛИ', subtitle: 'Благодаря GPS-модулю кораблик будет самостоятельно закармливать одну и ту же точку. В вашем распоряжении до 4 отсеков общей грузоподъемностью до 7 кг' },
        { img: '/auto3.png', title: 'ЗАВЕЗИТЕ ОСНАСТКУ ТОЧНО В ЦЕЛЬ', subtitle: 'Механизм сброса не даст вашей снасти запутаться по пути и легко открывается нажатием одной кнопки. Теперь наживка находится в подготовленном вами месте, и поклёвки не заставят себя долго ждать' },
        { img: '/auto4.png', title: 'ПОЙМАЙТЕ ТРОФЕЙ СВОЕЙ МЕЧТЫ', subtitle: 'Полный контроль ситуации и осознанность действий. У рыбы не останется шансов' },
    ]
    const pageWidth = document.documentElement.scrollWidth
    // // Индекс текущего слайда
    // const [activeIndex, setActiveIndex] = useState(0);

    // // Хук Effect

    // // Вычисляем индекс предыдущего слайда
    // const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1
    // // Вычисляем индекс следующего слайда
    // const nextImgIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    const $ = selector => {
        return document.querySelector(selector);
    };

    function next() {
        $(".hide").classList.add("new-nextT");
        $(".hide").classList.remove("hide");
        $(".hide-img").classList.add("new-nextT-img");
        $(".hide-img").classList.remove("hide-img");

        $(".prev").classList.add("hide");
        $(".prev").classList.remove("prev");
        $(".prev-img").classList.add("hide-img");
        $(".prev-img").classList.remove("prev-img");

        $(".act").classList.add("prev");
        $(".act").classList.remove("act");
        $(".act-img").classList.add("prev-img");
        $(".act-img").classList.remove("act-img");

        $(".next").classList.add("act");
        $(".next").classList.remove("next");
        $(".next-img").classList.add("act-img");
        $(".next-img").classList.remove("next-img");

        $(".new-nextT").classList.add("next");
        $(".new-nextT").classList.remove("new-nextT");
        $(".new-nextT-img").classList.add("next-img");
        $(".new-nextT-img").classList.remove("new-nextT-img");


    }

    function prev() {
        $(".next").classList.add("hideT");
        $(".next-img").classList.add("hideT-img");
        $(".next").classList.remove("next");
        $(".next-img").classList.remove("next-img");

        $(".act").classList.add("next");
        $(".act-img").classList.add("next-img");
        $(".act").classList.remove("act");
        $(".act-img").classList.remove("act-img");

        $(".prev").classList.add("act");
        $(".prev-img").classList.add("act-img");
        $(".prev").classList.remove("prev");
        $(".prev-img").classList.remove('prev-img');

        $(".hide").classList.add("prev");
        $(".hide-img").classList.add("prev-img");
        $(".hide").classList.remove("hide");
        $(".hide-img").classList.remove("hide-img");

        $(".hideT").classList.add("hide");
        $(".hideT-img").classList.add("hide-img");
        $(".hideT").classList.remove("hideT");
        $(".hideT-img").classList.remove("hideT-img");

    }

    const slide = element => {
        /* Next slide */
        console.log(element.target, element)

        if (element.target.classList.contains('next-img')) {
            next();

            /* Previous slide */

        } else if (element.target.classList.contains('prev-img')) {
            prev();
        }
    }



    return (
        <div className="slider">
            {pageWidth >= 966 ?
                <>
                    <button onClick={prev} className="left-arrow">
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87166 12.7547L0.85403 11.8227L-5.79811e-07 12.7355L0.83462 13.6675L1.87166 12.7547ZM0.83462 13.6647L11.9259 26L14 24.1799L2.90869 11.8446L0.83462 13.6647ZM2.88651 13.6867L13.9778 1.864L11.9453 -5.22147e-07L0.85403 11.8227L2.88928 13.6867L2.88651 13.6867Z" fill="white" />
                        </svg>
                    </button>
                    <ul className='list-slider'>
                        <li className="slider-img hide" onClick={slide}>
                            <img src={images[0].img} alt="" className="hide-img" />
                            <div className='slider-info'>
                                <h2>{images[0].title}</h2>
                                <p>{images[0].subtitle}</p>
                            </div>
                            <div className='index'>{1}<span>/4</span></div>
                        </li>
                        <li className="slider-img prev" onClick={slide}>
                            <img src={images[1].img} className="prev-img" alt="" />
                            <div className='slider-info'>
                                <h2>{images[1].title}</h2>
                                <p>{images[1].subtitle}</p>
                            </div>
                            <div className='index'>{2}<span>/4</span></div>
                        </li>
                        <li className="slider-img act" onClick={slide}>
                            <img src={images[2].img} alt="" className="act-img" />
                            <div className='slider-info'>
                                <h2>{images[2].title}</h2>
                                <p>{images[2].subtitle}</p>
                            </div>
                            <div className='index'>{3}<span>/4</span></div>
                        </li>
                        <li className="slider-img next" onClick={slide}>
                            <img src={images[3].img} className="next-img" alt="" />
                            <div className='slider-info'>
                                <h2>{images[3].title}</h2>
                                <p>{images[3].subtitle}</p>
                            </div>
                            <div className='index'>{4}<span>/4</span></div>
                        </li>
                        {/* <li className="slider-img new-next" onClick={slide}>
                        <img src={images[1].img} alt="" className="new-next-img"/>
                        <div className='slider-info'>
                            <h2>{images[1].title}</h2>
                            <p>{images[1].subtitle}</p>
                        </div>
                        <div className='index'>{2}<span>/4</span></div>
                    </li> */}
                    </ul>
                    <button onClick={next} className="right-arrow">
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1283 13.2453L13.146 14.1773L14 13.2645L13.1654 12.3325L12.1283 13.2453ZM13.1654 12.3353L2.07407 -5.21299e-07L-7.95607e-08 1.82014L11.0913 14.1554L13.1654 12.3353ZM11.1135 12.3133L0.0221805 24.136L2.05466 26L13.146 14.1773L11.1107 12.3133L11.1135 12.3133Z" fill="white" />
                        </svg>
                    </button>
                </>

                :
                <>{images.map((item, id) => (
                    <div className="slider-img"
                        key={id}>
                        <img key={id} src={item.img} alt="" />
                        <div className='slider-info'>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                        <div className='index'>{id + 1}<span>/4</span></div>
                    </div>
                ))} </>
            }
            {/* <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            <img key={images[prevImgIndex].img} src={images[prevImgIndex].img} alt="" />
            <div className='slider-info'>
                <h2>{images[prevImgIndex].title}</h2>
                <p>{images[prevImgIndex].subtitle}</p>
            </div>
            <div className='index'>{prevImgIndex%4+1}<span>/4</span></div>
        </div>
        <div className="slider-img"
                key={activeIndex}>
                <img key={images[activeIndex].img} src={images[activeIndex].img} alt="" />
                <div className='slider-info'>
                <h2>{images[activeIndex].title}</h2>
                <p>{images[activeIndex].subtitle}</p>
            </div>
            <div className='index'>{activeIndex%4+1}<span>/4</span></div>
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
                <img key={images[nextImgIndex].img} src={images[nextImgIndex].img} alt="" />
                <div className='slider-info'>
                <h2>{images[nextImgIndex].title}</h2>
                <p>{images[nextImgIndex].subtitle}</p>
            </div>
            <div className='index'>{nextImgIndex%4+1}<span>/4</span></div>
        </div> */}
        </div>
    );
}

export default CarouselAuto;
