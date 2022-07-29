import React, { useState, useEffect } from "react";
import "./CarouselMini.scss";
import { Link } from "react-router-dom";
import { Carousel } from '@trendyol-js/react-carousel';

const CarouselMini = ({ mass , currentIndex , setCurrentIndex , tmpKey , pultPagination=0}) => {
  const [length, setLength] = useState(4);
  const pageWidth = document.documentElement.scrollWidth
  const key = tmpKey
  const $ = selector => {
    return document.querySelector(selector);
  };

  useEffect(() => {
    let count = currentIndex-pultPagination
    if (count < 0) {
      for (let i = 0 ; i < Math.abs(count);i++) next()
    }
    else if (count > 0) {
      for (let i = 0 ; i < Math.abs(count);i++) prev()
    }
    setCurrentIndex(pultPagination)
   
  }, [pultPagination])

function next() {
    $(".hide"+key).classList.add("new-nextT"+key);
    $(".hide"+key).classList.remove("hide"+key);
    $(".hide-img"+key).classList.add("new-nextT-img"+key);
    $(".hide-img"+key).classList.remove("hide-img"+key);
    
    $(".prev"+key).classList.add("hide"+key);
    $(".prev"+key).classList.remove("prev"+key);
    $(".prev-img"+key).classList.add("hide-img"+key);
    $(".prev-img"+key).classList.remove("prev-img"+key);
    
    $(".act"+key).classList.add("prev"+key);
    $(".act"+key).classList.remove("act"+key);
    $(".act-img"+key).classList.add("prev-img"+key);
    $(".act-img"+key).classList.remove("act-img"+key);

    $(".next"+key).classList.add("act"+key);
    $(".next"+key).classList.remove("next"+key);
    $(".next-img"+key).classList.add("act-img"+key);
    $(".next-img"+key).classList.remove("next-img"+key);

    $(".new-nextT"+key).classList.add("next"+key);
    $(".new-nextT"+key).classList.remove("new-nextT"+key);
    $(".new-nextT-img"+key).classList.add("next-img"+key);
    $(".new-nextT-img"+key).classList.remove("new-nextT-img"+key);

    currentIndex >= mass.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1)

}

function prev() {
    $(".next"+key).classList.add("hideT"+key);
    $(".next-img"+key).classList.add("hideT-img"+key);
    $(".next"+key).classList.remove("next"+key);
    $(".next-img"+key).classList.remove("next-img"+key);

    $(".act"+key).classList.add("next"+key);
    $(".act-img"+key).classList.add("next-img"+key);
    $(".act"+key).classList.remove("act"+key);
    $(".act-img"+key).classList.remove("act-img"+key);

    $(".prev"+key).classList.add("act"+key);
    $(".prev-img"+key).classList.add("act-img"+key);
    $(".prev"+key).classList.remove("prev"+key);
    $(".prev-img"+key).classList.remove('prev-img'+key);

    $(".hide"+key).classList.add("prev"+key);
    $(".hide-img"+key).classList.add("prev-img"+key);
    $(".hide"+key).classList.remove("hide"+key);
    $(".hide-img"+key).classList.remove("hide-img"+key);

    $(".hideT"+key).classList.add("hide"+key);
    $(".hideT-img"+key).classList.add("hide-img"+key);
    $(".hideT"+key).classList.remove("hideT"+key);
    $(".hideT-img"+key).classList.remove("hideT-img"+key);
    currentIndex <= 0 ? setCurrentIndex(mass.length-1) : setCurrentIndex(currentIndex-1)

}



  return (
    pageWidth > 1000 ?
      <div className="slider-container" >
        <ul className="slider-track" id="slider-track">
          <li className={"slider-images hide"+key} style={tmpKey==1 || tmpKey==2 ? {backgroundColor:"white"} : {}}><img className={"hide-img"+key} src={mass[2].img} alt="" /></li>
          <li className={"slider-images prev"+key} style={tmpKey==1 || tmpKey==2 ? {backgroundColor:"white"} : {}} ><img className={"prev-img"+key} src={mass[3].img} alt="" /></li>
          <li className={"slider-images act"+key} style={tmpKey==1 || tmpKey==2 ? {backgroundColor:"white"} : {}}><img className={"act-img"+key} src={mass[0].img} alt="" /></li>
          <li className={"slider-images next"+key} style={tmpKey==1 || tmpKey==2 ? {backgroundColor:"white"} : {}}><img className={"next-img"+key} src={mass[1].img} alt="" /></li>
        </ul>
        <div className="slider__pagination">
          <svg onClick={prev} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.87166 12.7547L0.85403 11.8227L-5.79811e-07 12.7355L0.83462 13.6675L1.87166 12.7547ZM0.83462 13.6647L11.9259 26L14 24.1799L2.90869 11.8446L0.83462 13.6647ZM2.88651 13.6867L13.9778 1.864L11.9453 -5.22147e-07L0.85403 11.8227L2.88928 13.6867L2.88651 13.6867Z" fill="#0C1217" />
          </svg>
          {currentIndex + 1}/4
          <svg onClick={next} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1283 13.2453L13.146 14.1773L14 13.2645L13.1654 12.3325L12.1283 13.2453ZM13.1654 12.3353L2.07407 -5.21299e-07L-7.95607e-08 1.82014L11.0913 14.1554L13.1654 12.3353ZM11.1135 12.3133L0.0221805 24.136L2.05466 26L13.146 14.1773L11.1107 12.3133L11.1135 12.3133Z" fill="#0C1217" />
          </svg>

        </div>
      </div>
      :
      <div className="slider-mobile">
        <div className="slider__pagination">
          <div className="container-arrow"><svg onClick={prev} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.87166 12.7547L0.85403 11.8227L-5.79811e-07 12.7355L0.83462 13.6675L1.87166 12.7547ZM0.83462 13.6647L11.9259 26L14 24.1799L2.90869 11.8446L0.83462 13.6647ZM2.88651 13.6867L13.9778 1.864L11.9453 -5.22147e-07L0.85403 11.8227L2.88928 13.6867L2.88651 13.6867Z" fill="#0C1217" />
          </svg></div>
          {currentIndex + 1}/4
          <div className="container-arrow">
            <svg onClick={next} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1283 13.2453L13.146 14.1773L14 13.2645L13.1654 12.3325L12.1283 13.2453ZM13.1654 12.3353L2.07407 -5.21299e-07L-7.95607e-08 1.82014L11.0913 14.1554L13.1654 12.3353ZM11.1135 12.3133L0.0221805 24.136L2.05466 26L13.146 14.1773L11.1107 12.3133L11.1135 12.3133Z" fill="#0C1217" />
            </svg>
          </div>
        </div>
        <div className="slider-track" id="slider-track">
            <div className={"slider-mobile__images"}><img src={mass[currentIndex].img} alt="" /></div>
          </div>
      </div>
  );
};

export default CarouselMini;



{/* <Carousel show={2.5} slide={2} transition={0.5} swiping={true}>
{mass.map((item, id) => (
    <div className="carousel__item"><img src={item} alt="" /></div>
))}

</Carousel> */}