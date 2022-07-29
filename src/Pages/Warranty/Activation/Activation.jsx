import React, { useState } from 'react';
import './Activation.scss';



const Activation = () => {
    const [flagKa , setFlagKa] = useState(false)
    const [flagSp , setFlagSp] = useState(false)
    const [flagFl , setFlagFl] = useState(false)
    const [flagTr , setFlagTr] = useState(false)
    const [flagFi , setFlagFi] = useState(false)
    const [flagMo , setFlagMo] = useState(false)
    const [flagPo , setFlagPo] = useState(false)
    const [flagAny , setFlagAny] = useState(false)

    return (
        <div className="Activation">
            <div className='Activation__container'>
                <h2 className='Activation__title'>Активация гарантии</h2>
                <div className='Activation__content content-activ'>
                    <div className='content-activ__form'>
                        <input className='numberInput' type="number" placeholder='Введите серийный номер'/>
                        <div className='fotm-activation__info'>
                            <select name="" id="" placeholder='Месяц покупки'>
                                <option value="1">Январь</option>
                            </select>
                            <select name="" id="" placeholder='Год покупки'>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                            <select name="" id="" placeholder='Выберите модель'>
                                <option value="1">test</option>
                            </select>
                            <select name="" id="" placeholder='Bыберите комплектацию'>
                                <option value="1">test</option>
                                <option value="2">test</option>
                                <option value="3">test</option>
                            </select>
                            <select name="" id="" placeholder='Выберите город'>
                                <option value="Москва">Москва</option>
                                <option value="2">test</option>
                                <option value="3">test</option>
                            </select>
                            <input type="text" placeholder='В каком магазине купили?' />
                            <input type="text" placeholder='Введите имя' />
                            <input type="text" placeholder='Введите фамилию' />
                            <input type="number" placeholder='Введите телефон' />
                            <input type="text" placeholder='Введите электронную почту ' />
                        </div>
                        <div className='content-activ__radio radio-activ'>
                            <h2 className='radio-activ__title'>Каким видом ловли увлекаетесь?</h2>
                            <div className='radio-activ__list'>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagKa(!flagKa)}><div className={flagKa?'active':'None'}></div></div>
                                    <p>Карповая ловля</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagSp(!flagSp)}><div className={flagSp?'active':'None'}></div></div>
                                    <p>Спиннинговая ловля</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagFl(!flagFl)}><div className={flagFl?'active':'None'}></div></div>
                                    <p>Флэт-фидер</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagTr(!flagTr)}><div className={flagTr?'active':'None'}></div></div>
                                    <p>Троллинговая ловля</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagFi(!flagFi)}><div className={flagFi?'active':'None'}></div></div>
                                    <p>Фидерная ловля</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagMo(!flagMo)}><div className={flagMo?'active':'None'}></div></div>
                                    <p>Морская ловля</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagPo(!flagPo)}><div className={flagPo?'active':'None'}></div></div>
                                    <p>Поплавочная ловля</p>
                                </div>
                                <div className='radio-activ__item'>
                                    <div className='radio-activ__check' onClick={e => setFlagAny(!flagAny)}><div className={flagAny?'active':'None'}></div></div>
                                    <p>Другая</p>
                                </div>
                            </div>
                        </div>
                        <textarea className='content-activ__comment' placeholder='Каким видом ловли увлекаетесь?'></textarea>
                        <label className='content-activ__checkbox'><input type="checkbox" name="checkbox" value="value" />Подписаться на новости и акции</label>
                        <div className='content-activ__button'>Активировать гарантию</div>
                    </div>
                    <div className='content-activ__img'>
                        <p>Где находится серийный номер?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activation;
