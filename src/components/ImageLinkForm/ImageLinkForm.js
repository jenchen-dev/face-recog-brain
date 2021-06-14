import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit, resetImageInputs }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input id='imagelink' placeholder='paste your image link' className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='code w-15 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onPictureSubmit}
                    >Detect</button>
                    <button 
                        className='code w-15 grow f4 link ml2 ph3 pv2 dib white bg-light-purple'
                        onClick={resetImageInputs}
                    >Reset</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;