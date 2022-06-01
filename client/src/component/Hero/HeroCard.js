import React from 'react';
import './Hero.css'

export default function HeroCard({ title, value, image }) {
    return (
        <div>
            <div className='hero-card-main'>
                <div className='hero-card-title'>
                    {title}
                </div>
                <div className='hero-image'>
                    <img src={image} alt="" />
                </div>
                <div className='hero-value'>
                    {value}
                </div>
            </div>

        </div>
    )
}
