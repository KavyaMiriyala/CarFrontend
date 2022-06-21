import React from 'react'; 

import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData';
import {CarData} from './Cars';
import Cardsample from './Cardsample';
import {Carfooter} from './Carfooter';

export function FindaCar() {
 
  return (
    <div>
<ImageSlider slides={SliderData}/>
        <h1 className='mt-5 text-center'>Models</h1>
        <ImageSlider slides={CarData}/>
        <h1 className='text-center'>Display Cars</h1>
        <Cardsample/>
        <Carfooter/>
    </div>
  )
}

export default FindaCar