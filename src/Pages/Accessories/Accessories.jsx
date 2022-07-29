import './Accessories.scss';
import { Link } from "react-router-dom";
import ProductItem from '../../Components/ProductItem/ProductItem';

const  Accessories = () => {
    const product = [
        {img:['access/1.png','access/2.png','access/3.png','access/2.png'] , name:'Название товара' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/2.png','access/3.png','access/1.png','access/1.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/3.png','access/2.png','access/1.png','access/3.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/3.png','access/3.png','access/2.png','access/1.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/2.png','access/3.png','access/1.png','access/1.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/3.png','access/2.png','access/1.png','access/3.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/3.png','access/3.png','access/2.png','access/1.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'},
        {img:['access/3.png','access/3.png','access/2.png','access/1.png'] , name:'Иван Иванович' , info: "Короткое описание товара. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",price:'38 000 P',disc:'43 000 P'}
    ]


  return (
    <div className='Accessories'> 
        <div className='Accessories_container'>
            <h2 className='Accessories__title'>Аксессуары</h2>
            <div className='Accessories__tabs tabs-accessor'>
                <div className='tabs-accessor__item'>Все аксессуары</div>
                <div className='tabs-accessor__item'>Чехлы для пульта управления</div>
                <div className='tabs-accessor__item'>Сумки и рюкзаки для кораблика</div>
                <div className='tabs-accessor__item'>Одежда</div>
                <div className='tabs-accessor__item'>Комплектующие</div>
            </div>
            <div className='Accessories__content content-accessor'>
                {product.map((item , id) => (
                    <ProductItem item={item} flag={true}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Accessories;
