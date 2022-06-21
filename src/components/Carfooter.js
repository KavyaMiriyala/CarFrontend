import React from 'react'
import {CFooter,CLink} from '@coreui/react'

import {FaTwitter,FaGoogle,FaGithub,FaYoutube,FaLinkedin} from 'react-icons/fa'
export function Carfooter() {
  return (
    <div className='mt-5 cf'>
    <CFooter className='text-black'>
    <div className='row text-center'>
    <div className='col-sm-4'>
      <CLink href="#" className='text-black'>HyunFord</CLink>
      <span>&copy;  2022 13Mar</span>
      <br></br>
      <span>Powered by</span>
      <CLink href="#" className='text-black'>CarIndia</CLink>
    </div>
    <div className='col-sm-4'>
      <span>Reach us @ </span> 
    <div>
        <span className='mx-2'><FaTwitter /></span>
        <span className='mx-2'><FaGoogle/></span>
        <span className='mx-2'><FaGithub/></span> 
        <span className='mx-2'><FaYoutube/></span> 
        <span className='mx-2'><FaLinkedin/></span>
     </div>
    </div>
    <div className='col-sm-4'>
    <span>Hyderabad | Banglore | Mumbai</span> 
    </div>
    </div>
  </CFooter>
  </div>
  );
}

export default Carfooter
