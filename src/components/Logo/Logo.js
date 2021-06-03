import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div  className='ma4 mt0'>
            <Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img alt='logo' src={brain}/>
                    <p className='light-blue'>Smart Brain</p>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;