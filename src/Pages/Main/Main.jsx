import './Main.scss';
import Carousel from '../../Components/Carousel/Carousel';
import CarouselAuto from '../../Components/CarouselAuto/CarouselAuto';


const  Main = () => {
  return (
    <div className="Main">
        <Carousel />
        <div className="Main__categories categories">
          <div className='categories__container'>
          <div className='categories__item'>
            <img className='categories__image' src="star.svg" alt="" />
            <div className='categories__text'>
              <p className='categories__title' >Официальный представитель бренда в России</p>
              <a className='categories__link' href="#">Подробнее</a>
            </div>
          </div>
          <div className='categories__item'>
            <img className='categories__image' src="test.svg" alt="" />
            <div className='categories__text'>
              <p className='categories__title' >Тестирование перед отправкой</p>
              <a className='categories__link' href="#">Подробнее</a>
            </div>
          </div>
          <div className='categories__item'>
            <img className='categories__image' src="cube.svg" alt="" />
            <div className='categories__text'>
              <p className='categories__title' >Бесплатная доставка по России </p>
              <a className='categories__link' href="#">Подробнее</a>
            </div>
          </div>
          <div className='categories__item'>
            <img className='categories__image' src="support.svg" alt="" />
            <div className='categories__text'>
              <p className='categories__title' >Техническая  поддержка 24/7</p>
              <a className='categories__link' href="#">Подробнее</a>
            </div>
          </div>
          <div className='categories__item'>
            <img className='categories__image' src="warranty.svg" alt="" />
            <div className='categories__text'>
              <p className='categories__title' >Гарантийное обслуживание и возврат</p>
              <a className='categories__link' href="#">Подробнее</a>
            </div>
          </div>
          <div className='categories__item'>
            <img className='categories__image' src="money.svg" alt="" />
            <div className='categories__text'>
              <p className='categories__title' >Возможность купить в кредит  или рассрочку</p>
              <a className='categories__link' href="#">Подробнее</a>
            </div>
          </div>
          </div>
          
        </div>
        <CarouselAuto />
        <div className='Main__models models'>
          <div className='models_container'>
            <h2 className='models__title'>Модельный ряд</h2>
            <div className='models__content content-models'>
                <div className='content-models__item models-item-1'>
                  <div className='models-item__info'> 
                    <p className='item-series'>серия</p>
                    <h2 className='item-title'>ACTOR</h2>
                    <p className='item-subtitle'>Компактность и доступность в сочетании с полным функционалом</p>
                    <div className='item-button'>Подробнее</div>
                  </div>
                </div>
                <div className='content-models__item models-item-2'>
                  <div className='models-item__info'> 
                    <p className='item-series'>серия</p>
                    <h2 className='item-title'>Actor Plus</h2>
                    <p className='item-subtitle'>Увеличенный объем контейнера и современный пульт управления</p>
                    <div className='item-button'>Подробнее</div>
                  </div>
                </div>
                <div className='content-models__item models-item-3'>
                  <div className='models-item__info'> 
                    <p className='item-series'>серия</p>
                    <h2 className='item-title'>Fighter</h2>
                    <p className='item-subtitle'>Усовершенствованный эхолот и агрессивный дизайн</p>
                    <div className='item-button'>Подробнее</div>
                  </div>
                </div>
                <div className='content-models__item models-item-4'>
                  <div className='models-item__info'> 
                    <p className='item-series'>серия</p>
                    <h2 className='item-title'>Leader</h2>
                    <p className='item-subtitle'>Непревзойденная устойчивость и максимальная грузоподъемность</p>
                    <div className='item-button'>Подробнее</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Main;
