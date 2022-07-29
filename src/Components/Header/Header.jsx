import React, { useState } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
  const [typeMenu, setTypeMenu] = useState('')

  const menuHandler = (type) => {
    switch (type) {
      case 'ca':
        typeMenu == 'ca' ? setTypeMenu('') : setTypeMenu('ca')
        return
      case 'ba':
        typeMenu == 'ba' ? setTypeMenu('') : setTypeMenu('ba')
        return
      case 'su':
        typeMenu == 'su' ? setTypeMenu('') : setTypeMenu('su')
        return
      case 'wa':
        typeMenu == 'wa' ? setTypeMenu('') : setTypeMenu('wa')
    }
  }

  return (
    <div className='mainHeader'>
      <div className="Header">
        <div className='Header__container'>
          <div className='Header__content'>
            <Link to='/' className='header__logo'>
              <img src="logo.svg" alt="Логотип компании" />
            </Link>
            <ul className='header__menu menu'>
              <li className={typeMenu == 'ca' ? 'menu__item active-item-menu' : 'menu__item'} onClick={e => menuHandler('ca')}>Каталог</li>
              <li className='menu__item'>Кто мы</li>
              <li className='menu__item'>Акция</li>
              <li className={typeMenu == 'ba' ? 'menu__item active-item-menu' : 'menu__item'} onClick={e => menuHandler('ba')}>База знаний</li>
              <li className={typeMenu == 'su' ? 'menu__item active-item-menu' : 'menu__item'} onClick={e => menuHandler('su')}>Поддержка</li>
              <li className={typeMenu == 'wa' ? 'menu__item active-item-menu' : 'menu__item'} onClick={e => menuHandler('wa')}>Гарантия</li>
              <li className='menu__item'>Доставка и оплата</li>
              <li className='menu__item'>Контакты</li>
            </ul>
            <div className='header__buttons buttons-header'>
              <div className='buttons-header__item'>
                <img src="compare.svg" alt="" />
                <p>Сравнение</p>
              </div>
              <Link to="/basket" className='buttons-header__item'>
                <img src="basket.svg" alt="" />
                <p>Корзина</p>
              </Link>
            </div>
          </div>
          {typeMenu &&
            <div className='menu-full'>
              <div className='menu-full__container'>
                <div className='menu-full__action'>
                  <p className='action-full__title'>Здесь можно добавить акцию</p>
                  <p className='action-full__subtitle'>Подробнее</p>
                </div>
                {typeMenu == 'ca' && <div className='menu-full__catalog'>
                  <p className='catalog-full__title'>Прикормочные кораблики</p>
                  <div className='catalog-full__series'>
                    <p>Actor</p>
                    <p>Fighter</p>
                    <p>Actor Plus</p>
                    <p>Leader</p>
                  </div>
                  <p className='catalog-full__title'>Аксессуары</p>
                </div>}
                {typeMenu == 'ba' && <div className='menu-full__base'>
                  <div className='base-full__col'>
                    <p>Начало работы</p>
                    <p>Пульт управления</p>
                    <p>Настройка автопилота</p>
                    <p>Настройка эхолота</p>
                  </div>
                  <div className='base-full__col'>
                    <p>Чтение показаний эхолота</p>
                    <p>Автовозврат на домашнюю точку</p>
                    <p>Завоз оснастки</p>
                    <p>Завершение работы</p>
                  </div>
                </div>}
                {typeMenu == 'su' && <div className='menu-full__support'>
                  <p>Техническая поддержка</p>
                  <p>Руководства и инструкции</p>
                  <p>Часто задаваемые вопросы </p>
                </div>}
                {typeMenu == 'wa' && <div className='menu-full__warranty'>
                  <p>Тест-драйв перед отправкой</p>
                  <Link to='/warranty/activation'>Активация гарантии</Link>
                  <p>Проверка серийного номера</p>
                </div>}
              </div>
            </div>}
        </div>
      </div>
      <div className='Subheader'>
        <div className='Subheader__container'>
          <div className='subheader__menu menu-sub'>
            <div className='menu-sub__item'>Actor</div>
            <div className='menu-sub__item'>Actor Plus</div>
            <div className='menu-sub__item'>Fighter</div>
            <div className='menu-sub__item'>Leader</div>
          </div>
          <div className='subheader__number'>
            +7 999 999 99 99
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
