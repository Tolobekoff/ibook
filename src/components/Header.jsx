import React from 'react';
import { SlBasket } from "react-icons/sl";
import { GrUserAdmin } from "react-icons/gr";


const Header = () => {
    return (
        
        <header className=''>
            <div className="container">
                <div className="header">
                    <h1>
                        ibook
                    </h1>
                    <div className="headDetail">
                    <div className="search">
                    <input placeholder="Search..." type="text"/>
                     <button type="submit">Go</button>
                    </div>
                    <div className="basketBtn">
                    <SlBasket style={{color: '#fff'}} />
                    <h5>корзина</h5>
                    </div>
                    <div className="adminBtn">
                    <GrUserAdmin style={{color: '#fff'}} />
                    <h5>админ</h5>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;