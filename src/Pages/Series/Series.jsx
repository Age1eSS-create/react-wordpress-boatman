import React, { useState } from 'react';
import './Series.scss';
import { useParams } from "react-router-dom";
import TableInfo from '../../Components/TableInfo/TableInfo';
import CarouselMini from '../../Components/CarouselMini/CarouselMini';
import ProductItem from '../../Components/ProductItem/ProductItem';


const Series = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexP, setCurrentIndexP] = useState(0);
    const [currentIndexC, setCurrentIndexC] = useState(0);
    const [pultPagination , setPultPagination] = useState()
    const series = [
        {
            img: '/actor/actorMain.png', name: "Actor", subtitle: 'Компактность и доступность в сочетании с полным функционалом',
            info: ['1,5 кг', "2,5 ч", "500 м", "2 класс"], table: { exo: [false, false, true, true], gps: [false, true, false, true] },
            corp: [
                { img: '/actor/corp1.png', title: 'Аккумуляторный отсек', text: 'Герметичная крышка отсека предотвратит попадание воды внутрь кораблика, а расположенный на ней индикатор подскажет, как скоро вам потребуется подзарядить аккумулятор' },
                { img: '/actor/corp2.png', title: 'Габаритные огни', text: 'Передние и задние огни позволят вам пользоваться корабликом в любое время суток, а также облегчит его обнаружение на больших дистанциях' },
                { img: '/actor/corp3.png', title: 'Корпус', text: 'Корпус кораблика выполнен в форме катамарана, что обеспечивает максимальную устойчивость на волнах и плавность хода при небольших габаритах' },
                { img: '/actor/corp4.png', title: 'Легкая транспортировка', text: 'С помощью надежно закрепленной к корпусу ручки вы без труда сможете перенести прикормочный кораблик с места на место, опустить в воду и поднять на берег' }
            ],
            pult: [
                { img: '/actor/pult1.png', title: 'Пульт управления корабликом', text: 'Управляется одной рукой и обладает необходимым набором кнопок, с помощью которых контролируется движение кораблика, сброс прикормки и оснастки, а также работа габаритных огней' },
                { img: '/actor/pult2.png', title: 'Пульт управления корабликом', text: 'Отличается наличием информативного дисплея для управления автопилотом'},
                { img: '/actor/pult3.png', title: 'Пульт управления корабликом', text: 'Комбинация цветного дисплея эхолота высокого разрешения и базового пульта управления обеспечивает максимальный комфорт при сканировании водоема, сохраняя удобство управления корабликом'},
                { img: '/actor/pult4.png', title: 'Пульт управления корабликом', text: 'Контролируйте функционал кораблика, автопилота и эхолота с помощью универсального пульта управления, который легко помещается в руке' }
            ],
            cont: [
                { img: '/actor/cont1.png', title: 'Контейнеры для прикормки', text: 'Два контейнера для загрузки прикормки – центральный объемом ___ мл и задний объемом ___ мл, которые открываются независимо друг от друга. Общая грузоподъемность кораблика 1,5 кг' },
                { img: '/actor/cont2.png', title: 'Электродвигатели', text: 'Два электродвигателя общей мощностью ____ Вт обеспечивают скорость вращения лопастей ___ об/мин и позволяют кораблику двигаться со скоростью до ___ м/мин, сохраняя при этом высокую устойчивость и позволяя эхолоту построить максимально точный рельеф и обработать всю отсканированную информацию'},
                { img: '/actor/cont3.png', title: 'Отсек для сброса оснастки', text: 'Поместите вашу оснастку в задний контейнер кораблика, откройте дужку катушки, доставьте снасть до точки ловли и сбросьте точно в прикормленное место'},
                { img: '/actor/cont4.png', title: 'Защита лопастей', text: 'Специально разработанный кожух предотвратит попадание водорослей и мусора в зону вращения лопастей электродвигателя, а также защитит их от механических повреждений' }
            ],
            products: [{ img: '/actor/product1.png', name: 'actor basic', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '38 000 P', disc: '43 000 P' },
            { img: '/actor/product1.png', name: 'actor gps', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor sonar', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor pro', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' }
            ]
        },
        {
            img: '/plus/actorMain.png', name: "Actor", subtitle: 'Компактность и доступность в сочетании с полным функционалом',
            info: ['1,5 кг', "2,5 ч", "500 м", "2 класс"], table: { exo: [false, false, true, true], gps: [false, true, false, true] },
            corp: ['/actor/corp1.png', '/actor/corp2.png', '/actor/corp3.png', '/actor/corp4.png'],
            pult: ['/actor/pult1.png', '/actor/pult2.png'],
            products: [{ img: '/actor/product1.png', name: 'actor basic', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '38 000 P', disc: '43 000 P' },
            { img: '/actor/product1.png', name: 'actor gps', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor sonar', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor pro', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' }
            ]
        },
        {
            img: '/plus/actorMain.png', name: "Actor", subtitle: 'Компактность и доступность в сочетании с полным функционалом',
            info: ['1,5 кг', "2,5 ч", "500 м", "2 класс"], table: { exo: [false, false, true, true], gps: [false, true, false, true] },
            corp: ['/actor/corp1.png', '/actor/corp2.png', '/actor/corp3.png', '/actor/corp4.png'],
            pult: ['/actor/pult1.png', '/actor/pult2.png'],
            products: [{ img: '/actor/product1.png', name: 'actor basic', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '38 000 P', disc: '43 000 P' },
            { img: '/actor/product1.png', name: 'actor gps', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor sonar', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor pro', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' }
            ]
        },
        {
            img: '/actor/actorMainpng', name: "Actor", subtitle: 'Компактность и доступность в сочетании с полным функционалом',
            info: ['1,5 кг', "2,5 ч", "500 м", "2 класс"], table: { exo: [false, false, true, true], gps: [false, true, false, true] },
            corp: ['/actor/corp1.png', '/actor/corp2.png', '/actor/corp3.png', '/actor/corp4.png'],
            pult: ['/actor/pult1.png', '/actor/pult2.png'],
            products: [{ img: 'actor/product1.png', name: 'actor basic', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '38 000 P', disc: '43 000 P' },
            { img: '/actor/product1.png', name: 'actor gps', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor sonar', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' },
            { img: '/actor/product2.png', name: 'actor pro', info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: '28 000 P', disc: '43 000 P' }
            ]
        }
    ]

    let params = useParams();
    return (
        <div className="Series">
            <div className='series__main'>
                <div className='main__info'>
                    <p className='main-info-series'>серия</p>
                    <h2 className='info-name'>{series[params.id].name}</h2>
                    <p className='info-subtitle'>{series[params.id].subtitle}</p>
                    <div className='info-button'>Купить</div>
                </div>
                <img src={series[params.id].img} alt="" />
            </div>
            <div className='series__info info-series'>
                <div className='info-series__container'>
                    <div className='info-series__item info-item'>
                        <div className='info-item__number'>{series[params.id].info[0].split(' ')[0]} <span>кг</span></div>
                        <p>Грузоподъемность</p>
                    </div>
                    <div className='info-series__item info-item'>
                        <div className='info-item__number'>{series[params.id].info[1].split(' ')[0]} <span>ч</span></div>
                        <p>Время работы</p>
                    </div>
                    <div className='info-series__item info-item'>
                        <div className='info-item__number'>{series[params.id].info[2].split(' ')[0]} <span>м</span></div>
                        <p>Дальность связи</p>
                    </div>
                    <div className='info-series__item info-item'>
                        <div className='info-item__number'>{series[params.id].info[3].split(' ')[0]} <span>класс</span></div>
                        <p>Волноустойчивость</p>
                    </div>
                </div>
            </div>
            <div className='series__table table-series'>
                <div className='table-series__container'>
                    <h2 className='table-series__title'>Комплектация Actor</h2>
                    <TableInfo id={params.id} info={series[params.id].table} />
                </div>
            </div>
            <div className='series__video video-series'>
                <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47 26.268C48.3333 27.0378 48.3333 28.9623 47 29.7321L3.49999 54.8468C2.16666 55.6166 0.499997 54.6543 0.499997 53.1147L0.5 2.88526C0.5 1.34566 2.16667 0.38341 3.5 1.15321L47 26.268Z" fill="white" />
                </svg>
                <img src="/videoBG.png" alt="" />
            </div>
            <div className='series__corpus corpus-series'>
                <div className='corpus-series__container'>
                    <div className='corpus-series__info' >
                        <div className='corpus-series__title'>{series[params.id].corp[currentIndex].title}</div>
                        <div className='corpus-series__text'>{series[params.id].corp[currentIndex].text}</div>
                    </div>
                    <CarouselMini mass={series[params.id].corp} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} tmpKey={0}/>
                </div>
            </div>
            <div className='series__exo exo-series'>

                <div className='exo-series__info exo-series__info-sh'>
                    <div className='exo-series__title'>встроенный эхолот</div>
                    <div className='exo-series__subtitle'>Исследуйте водоем с помощью встроенного эхолота собственной разработки с цветным дисплеем высокого разрешения</div>
                    <div className='exo-series__button'>Подробнее</div>
                </div>
                <img src="/exoBG.png" alt="" />
            </div>
            <div className='series__corpus corpus-series'>
                <div className='corpus-series__container'>
                    <div className='corpus-series__info' >
                        <div className='corpus-series__title'>Пульт управления корабликом Actor Basic</div>
                        <div className='nav'>
                            <div className={currentIndexP==0 ? 'nav__item nav-item-active': 'nav__item'} onClick={e => setPultPagination(0)}>Actor Basic</div>
                            <div className={currentIndexP==1 ? 'nav__item nav-item-active': 'nav__item'} onClick={e => setPultPagination(1)} >Actor GPS</div>
                            <div className={currentIndexP==2 ? 'nav__item nav-item-active': 'nav__item'} onClick={e => setPultPagination(2)}>Actor Sonar</div>
                            <div className={currentIndexP==3 ? 'nav__item nav-item-active': 'nav__item'} onClick={e => setPultPagination(3)}>Actor Pro</div>
                        </div>
                        <div className='corpus-series__text'>{series[params.id].pult[currentIndexP].text}</div>
                        <div className='button button-pult'>Подробнее</div>
                    </div>
                    <CarouselMini mass={series[params.id].pult} currentIndex={currentIndexP} setCurrentIndex={setCurrentIndexP} tmpKey={1} pultPagination={pultPagination}/>
                </div>
            </div>
            <div className='series__exo exo-series'>
                <div className='exo-series__info shadow_content'>
                    <div className='exo-series__title'>Автопилот</div>
                    <div className='exo-series__subtitle'>Сохраните точки ловли в памяти устройства и без труда отправляйте к ним кораблик при закорме и завозе оснастки с помощью автопилота</div>
                    <div className='exo-series__button'>Подробнее</div>
                </div>
                <img className='auto-img' src="/autoBG.png" alt="" />
            </div>
            <div className='series__corpus corpus-series many_margin'>
                <div className='corpus-series__container'>
                    <div className='corpus-series__info' >
                        <div className='corpus-series__title'>{series[params.id].cont[currentIndexC].title}</div>
                        <div className='corpus-series__text'>{series[params.id].cont[currentIndexC].text}</div>
                    </div>
                    <CarouselMini mass={series[params.id].cont} currentIndex={currentIndexC} setCurrentIndex={setCurrentIndexC} tmpKey={2}  />
                </div>
            </div>
            <div className='series__products products-series'>
                <div className='products-series_container'>
                    <h2 className="products-series__title">Серия Actor</h2>
                    <div className='products-series__list'>
                        {series[params.id].products.map((item, id) => (
                            <ProductItem item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='Main__models models models-series'>
                <div className='models__container'>
                    <h2 className='models__title'>Модельный ряд</h2>
                    <div className='models__content content-models'>
                        {params.id != 0 && <div className='content-models__item models-item-1'>
                            <div className='models-item__info'>
                                <p className='item-series'>серия</p>
                                <h2 className='item-title'>ACTOR</h2>
                                <p className='item-subtitle'>Компактность и доступность в сочетании с полным функционалом</p>
                                <div className='item-button'>Подробнее</div>
                            </div>
                        </div>}
                        {params.id != 1 && <div className='content-models__item models-item-2'>
                            <div className='models-item__info'>
                                <p className='item-series'>серия</p>
                                <h2 className='item-title'>Actor Plus</h2>
                                <p className='item-subtitle'>Увеличенный объем контейнера и современный пульт управления</p>
                                <div className='item-button'>Подробнее</div>
                            </div>
                        </div>}
                        {params.id != 2 && <div className='content-models__item models-item-3'>
                            <div className='models-item__info'>
                                <p className='item-series'>серия</p>
                                <h2 className='item-title'>Fighter</h2>
                                <p className='item-subtitle'>Усовершенствованный эхолот и агрессивный дизайн</p>
                                <div className='item-button'>Подробнее</div>
                            </div>
                        </div>}
                        {params.id != 3 && <div className='content-models__item models-item-4'>
                            <div className='models-item__info'>
                                <p className='item-series'>серия</p>
                                <h2 className='item-title'>Leader</h2>
                                <p className='item-subtitle'>Непревзойденная устойчивость и максимальная грузоподъемность</p>
                                <div className='item-button'>Подробнее</div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Series;
