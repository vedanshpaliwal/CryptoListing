import React from 'react';
import './Header.css';
import logo from '../../Assests/QuikieApps.png'

export default function Header() {
    return (
        <div>
            <div className='header-main'>
                <div className='logo'>

                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}
