import React, { useState } from 'react';
import './BasketProduct.scss';

const BasketProduct = ({ item }) => {



    return (
        <div className='BasketProduct'>
            <div className='BasketProduct__images'>
                <img src="basket1.png" alt="" />
                <div className='BasketProduct__info'>
                    <p className='BasketProduct__name'>Actor Basic</p>
                    <p className='BasketProduct__subtitle'>Если понадобится комментарий, то он будет здесь </p>
                </div>
            </div>
            <div className='BasketProduct__buy'>
                <div className='buy-count'>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </div>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3846 6.7197C16.7976 6.7537 17.1056 7.1147 17.0726 7.5277C17.0666 7.5957 16.5246 14.3067 16.2126 17.1217C16.0186 18.8687 14.8646 19.9317 13.1226 19.9637C11.7896 19.9867 10.5036 19.9997 9.2466 19.9997C7.8916 19.9997 6.5706 19.9847 5.2636 19.9577C3.5916 19.9247 2.4346 18.8407 2.2456 17.1287C1.9306 14.2887 1.3916 7.5947 1.3866 7.5277C1.3526 7.1147 1.6606 6.7527 2.0736 6.7197C2.4806 6.7087 2.8486 6.9947 2.8816 7.4067C2.88479 7.4501 3.10514 10.1837 3.34526 12.8884L3.39349 13.4282C3.51443 14.7725 3.63703 16.0643 3.7366 16.9637C3.8436 17.9367 4.3686 18.4387 5.2946 18.4577C7.7946 18.5107 10.3456 18.5137 13.0956 18.4637C14.0796 18.4447 14.6116 17.9527 14.7216 16.9567C15.0316 14.1627 15.5716 7.4747 15.5776 7.4067C15.6106 6.9947 15.9756 6.7067 16.3846 6.7197ZM11.3454 0C12.2634 0 13.0704 0.619 13.3074 1.506L13.5614 2.767C13.6435 3.18037 14.0062 3.48226 14.4263 3.48889L17.708 3.489C18.122 3.489 18.458 3.825 18.458 4.239C18.458 4.653 18.122 4.989 17.708 4.989L14.4556 4.98885C14.4505 4.98895 14.4455 4.989 14.4404 4.989L14.416 4.988L4.04162 4.98888C4.03355 4.98896 4.02548 4.989 4.0174 4.989L4.002 4.988L0.75 4.989C0.336 4.989 0 4.653 0 4.239C0 3.825 0.336 3.489 0.75 3.489L4.031 3.488L4.13202 3.48161C4.50831 3.43279 4.82104 3.147 4.8974 2.767L5.1404 1.551C5.3874 0.619 6.1944 0 7.1124 0H11.3454ZM11.3454 1.5H7.1124C6.8724 1.5 6.6614 1.661 6.6004 1.892L6.3674 3.062C6.33779 3.2102 6.29467 3.35301 6.23948 3.48927H12.2186C12.1634 3.35301 12.1201 3.2102 12.0904 3.062L11.8474 1.846C11.7964 1.661 11.5854 1.5 11.3454 1.5Z" fill="#C4C4C4"/>
                </svg>
                <p className='buy-price'>28 000 Р</p>
                <p className='buy-sale'>43 000 Р</p>
            </div>
        </div>
    );
}

export default BasketProduct;