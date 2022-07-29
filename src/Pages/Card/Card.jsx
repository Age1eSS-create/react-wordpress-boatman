import React, { useState, useEffect } from 'react';
import './Card.scss';
import Carousel from '../../Components/Carousel/Carousel';
import CarouselAuto from '../../Components/CarouselAuto/CarouselAuto';
import ProductItem from '../../Components/ProductItem/ProductItem';
import ReviewItem from '../../Components/ReviewItem/ReviewItem';

import { BrowserRouter, Routes, Route } from "react-router-dom";



const Card = ({ item }) => {
    const [flagDop, setFlagDop] = useState(false)
    const [flagDesc, setFlagDesc] = useState(false)
    const pageWidth = document.documentElement.scrollWidth

    const [scroll, setScroll] = React.useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };
    // useEffect(() => {
    //     console.log(scroll)
    //     if (pageWidth > 1400) {
    //         let container = document.getElementById('images-card')
    //         let main = document.getElementsByClassName('main-card_container')[0]
    //         let tmp = document.getElementsByClassName('info-card')[0]
    //         if (scroll >= 150) {
    //             container.style.top='20px'
    //         }
    //         if (scroll < 150) {
    //             container.style.top='250px'
    //         }
    //         if (scroll >= 1000) {
    //             container.style.position = 'initial'
    //             main.style.alignItems = 'flex-end'
    //             tmp.style.marginLeft = '45px'
    //             console.log(container.style)
    //         }
    //         else {
    //             container.style.position = 'fixed'
    //             tmp.style.marginLeft = '47%'
    //         }
    //     }
    // }, [scroll])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const products =
        [
            { img: '/actor/product1.png', name: 'actor basic', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '38 000 P', disc: '43 000 P' },
            { img: '/actor/product1.png', name: 'actor gps', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor sonar', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor pro', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' }
        ]
    const review = [
        { img: ['/review/1.png', '/review/2.png', '/review/3.png', '/review/4.png'], name: 'Иван Иванович', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
        { img: ['/review/2.png', '/review/3.png', '/review/4.png', '/review/1.png'], name: 'Иван Иванович', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
        { img: ['/review/3.png', '/review/2.png', '/review/1.png', '/review/4.png'], name: 'Иван Иванович', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
        { img: ['/review/4.png', '/review/3.png', '/review/2.png', '/review/1.png'], name: 'Иван Иванович', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" }
    ]

    return (
        <div className="Card">
            <div className='card__main main-card'>
                <div className='main-card_container'>
                    <div>
                        <div className='main-card__images images-card' id='images-card'>
                            <div className='images-card__main'>
                                <img src="" alt="" />
                            </div>
                            <div className='images-card__list list-images'>
                                <div className='list-images__item'>
                                    <img src="" alt="" />
                                </div>
                                <div className='list-images__item'>
                                    <img src="" alt="" />
                                </div>
                                <div className='list-images__item'>
                                    <img src="" alt="" />
                                </div>
                                <div className='list-images__item'>
                                    <img src="" alt="" />
                                </div>
                                <div className='list-images__item list-images__item-video'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-card__info info-card'>
                        <div className='info-card__head'>
                            <div className='info-card__title'>Прикормочный кораблик Boatman Actor </div>
                            <div className='info-card__rating rating'>
                                <div className='rating__stars'>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="#D2D2D7" />
                                    </svg>
                                </div>
                                <div className='rating__link'>28 отзывов</div>
                            </div>
                        </div>
                        <div className='info-card__desc'>Описание. Прикормочный кораблик Boatman серии Actor отличается небольшими габаритами, надежностью и простотой управления. Он идеально подойдет для непродолжительных выездов и несомненно станет вашим верным рыболовным помощником</div>
                        <div className='info-card__link'>Подробнее о серии Actor</div>
                        <div className='info-card__complect complect-card'>
                            <h3 className='complect-card__title'>Комплектации:</h3>
                            <div className='complect-card__list complect-list'>
                                <div className='complect-list__item item-active '>
                                    <img src="" alt="" />
                                    <p>BASIC</p>
                                </div>
                                <div className='complect-list__item'>
                                    <img src="" alt="" />
                                    <p>BASIC</p>
                                </div>
                                <div className='complect-list__item'>
                                    <img src="" alt="" />
                                    <p>BASIC</p>
                                </div>
                                <div className='complect-list__item'>
                                    <img src="" alt="" />
                                    <p>BASIC</p>
                                </div>
                            </div>
                        </div>
                        <div className='info-card__color'>
                            <div className='card__color__title'>Цвет:</div>
                            <div className='card__color__list'>
                                <div className='card__color__item'>
                                    <div className='color'></div>
                                    <p className='text'>Черный</p>
                                </div>
                                <div className='card__color__item'>
                                    <div className='color'></div>
                                    <p className='text'>Карбон</p>
                                </div>
                            </div>
                        </div>
                        <div className='info-card__price'>
                            <div className='card__price__numbers'>
                                <p>28 000 P</p>
                                <p className='numbers__line'>43 000 P</p>
                            </div>
                            <div className='card__price__buttons'>
                                <div className='card__price__button card__price__button-red'>Добавить в корзину</div>
                                <div className='card__price__button'>Видео-консультация
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 6.13397C12.1667 6.51888 12.1667 7.48112 11.5 7.86602L1.75 13.4952C1.08333 13.8801 0.249999 13.399 0.249999 12.6292L0.25 1.37083C0.25 0.601033 1.08333 0.119909 1.75 0.504809L11.5 6.13397Z" fill="black" />
                                    </svg>
                                </div>
                                <div className='card__price-comp'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21H16.3846V6.36232H21V21ZM13.3077 21H8.69231V1H13.3077V21Z" stroke="black" />
                                        <path d="M1 21H5.61538V9.84058H1V21Z" stroke="black" />
                                    </svg>
                                    <p>В сравнение</p>
                                </div>
                            </div>
                        </div>
                        <div className='info-card__table table-card'>
                            <div className='table-card__item'>
                                <p className='table-card__title'>Дальность атаки</p>
                                <p className='table-card__text'>500 м</p>
                            </div>
                            <div className='table-card__item'>
                                <p className='table-card__title'>Скорость</p>
                                <p className='table-card__text'>70 м/мин</p>
                            </div>
                            <div className='table-card__item'>
                                <p className='table-card__title'>Грузоподъемность</p>
                                <p className='table-card__text'>1,5 кг</p>
                            </div>
                            <div className='table-card__item'>
                                <p className='table-card__title'>Количество контейнеров</p>
                                <p className='table-card__text'>3</p>
                            </div>
                            <div className='table-card__item'>
                                <p className='table-card__title'>Класс волноустойчивости</p>
                                <p className='table-card__text'>4</p>
                            </div>
                            <div className='table-card__item'>
                                <p className='table-card__title'>Вес</p>
                                <p className='table-card__text'>1,6 кг</p>
                            </div>
                        </div>
                        <div className='info-card__select select-card'>
                            <div className={'select-card__title title-' + flagDop} onClick={e => setFlagDop(!flagDop)}>Дополнительние характеристики
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83468 9.73501C7.43943 10.334 6.56057 10.334 6.16533 9.73501L1.09502 2.05074C0.65633 1.38589 1.13315 0.5 1.9297 0.5L12.0703 0.499999C12.8669 0.499999 13.3437 1.38588 12.905 2.05074L7.83468 9.73501Z" fill="black" />
                                </svg>
                            </div>
                            <ul className={'select-card__list-' + flagDop}>
                                <li className='select-card___item'>test</li>
                                <li className='select-card___item'>test</li>
                                <li className='select-card___item'>test</li>
                            </ul>
                        </div>
                        <div className='info-card__select select-card'>
                            <div className={'select-card__title title-' + flagDesc} onClick={e => setFlagDesc(!flagDesc)}>Описание комплектаций
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83468 9.73501C7.43943 10.334 6.56057 10.334 6.16533 9.73501L1.09502 2.05074C0.65633 1.38589 1.13315 0.5 1.9297 0.5L12.0703 0.499999C12.8669 0.499999 13.3437 1.38588 12.905 2.05074L7.83468 9.73501Z" fill="black" />
                                </svg>
                            </div>
                            <ul className={'select-card__list-' + flagDesc}>
                                <li className='select-card___item'>test</li>
                                <li className='select-card___item'>test</li>
                                <li className='select-card___item'>test</li>
                            </ul>
                        </div>
                        <div className='info-card__set set-card'>
                            <div className='set-card__title'>В комплекте</div>
                            <div className='set-card__list'>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Пульт управления</p>
                                </div>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Аккумулятор</p>
                                </div>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Зарядное устройство для аккумулятора</p>
                                </div>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Зарядное устройство для пульта управления</p>
                                </div>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Запасные винты электродвигателя</p>
                                </div>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Фирменное полотенце</p>
                                </div>
                                <div className='set-card__item set-item'>
                                    <img src="" alt="" />
                                    <p>Руководство на русском языке
                                        <a href="#">Скачать в pdf</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card__access access-card'>
                <div className='access-card_container'>
                    <h2 className='access-card__title'>Аксессуары к данной модели</h2>
                    <div className='access-card__content'>
                        {products.map((item, id) => (
                            <ProductItem item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Carousel flag={false} />
            <div className='card__rewiew rewiew-card'>
                <div className='rewiew-card_container'>
                    <div className='rewiew-card__header'>
                        <h2 className='rewiew-card__title'>Отзывы</h2>
                        <div className='rewiew-card__mark'>
                            <p>4.5</p>
                            <div className='rewiew-card__stars'>
                                <div className='rating__stars'>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="black" />
                                    </svg>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.08255 1.11573C8.4307 0.312854 9.5693 0.312853 9.91745 1.11573L11.4807 4.72069C11.6256 5.05485 11.9407 5.28379 12.3033 5.31834L16.2149 5.69108C17.086 5.77409 17.4379 6.85696 16.7819 7.43618L13.8364 10.0369C13.5634 10.278 13.4431 10.6484 13.5222 11.0039L14.3765 14.8392C14.5667 15.6934 13.6456 16.3627 12.892 15.9178L9.50839 13.9201C9.19475 13.735 8.80525 13.735 8.49161 13.9201L5.10798 15.9178C4.35439 16.3627 3.43325 15.6934 3.62351 14.8392L4.47777 11.0039C4.55695 10.6484 4.43658 10.278 4.16356 10.0369L1.21811 7.43618C0.562109 6.85696 0.913955 5.77409 1.78513 5.69108L5.69671 5.31834C6.05929 5.2838 6.37441 5.05485 6.51931 4.72069L8.08255 1.11573Z" fill="#D2D2D7" />
                                    </svg>
                                </div>
                                <div className='rating__link'>28 отзывов</div>
                            </div>
                        </div>
                    </div>
                    <div className='rewiew-card__content'>
                        {review.map((item, id) => (
                            <ReviewItem item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <CarouselAuto />
        </div>
    );
}

export default Card;
