import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className='pa4'>
                        <button onClick={() => onRouteChange('signout')} className='ma1 f5 link dim br-pill b--blue ph3 pv2 mb2 dib white bg-dark-blue'>Sign Out</button>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className='pa4'>
                        <button onClick={() => onRouteChange('signin')} className='ma1 f5 link dim br-pill b--blue ph3 pv2 mb2 dib white bg-dark-blue'>Sign In</button>
                        <button onClick={() => onRouteChange('register')} className='ma1 f5 link dim br-pill b--blue ph3 pv2 mb2 dib white bg-dark-blue'>Register</button>
                    </div>
                </nav>
            );
        }
}

export default Navigation;

/* <p className='f3 link dim black underline pa3 pointer'>Sign Out</p> */
