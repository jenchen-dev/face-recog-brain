import React from 'react';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className='pa4'>
                <button className='f5 link dim br-pill b--blue ph3 pv2 mb2 dib white bg-dark-blue'>Sign Out</button>
            </div>
        </nav>
    );
}

export default Navigation;

/* <p className='f3 link dim black underline pa3 pointer'>Sign Out</p> */
