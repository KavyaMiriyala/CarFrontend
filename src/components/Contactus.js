import React from 'react'
import {CCardBody,CCardText,CCard,CCardTitle} from '@coreui/react';
function Cardsample() {
  return (
    
    <div className="container-fluid d-flex justify-content-around card-group mt-5">
    <div className='row'>
    <div className='col-md-6'>
     <Card
       title="Call Us"
       description="For a quick response, we request you to be ready with your vehicle registration number or VIN number."
       des2="Call us for enquiry / feedback at"
       des3="1800114645"
       des4="9873564645"
     />
     </div>
     <div className='col-md-6'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/cars/figo/_jcr_content/par/brandgallery_69428842/image1/image.imgs.full.high.jpg/1626760636390.jpg"
       title="Email Us"
       description="If for any reason, you are not able to register your enquiry/ feedback" 
       des2="Please write to us on following email provided"
       des3="crsales@hmil.net"
       des4="crservice@hmil.net"
     />
</div>
</div>
</div>
   );
}
function Card(props){
return (
 // <div className='ck'>
 // <div className="card-deck mt-2">
 // <div className="card w-25 h-25 bg-info">
 //   <img className="card-img-top" src={props.img} alt=" "/>
 //   <div className="card-body">
 //     <h4 className="card-title">{props.title}</h4>
 //     <p className="card-text">{props.description}</p>
 //     <p className="card-text"><small className="text-muted">Explore Find a Car for more information</small></p>
 //   </div>
 // </div>
 // </div>
 // </div>
<CCard className="concard bg-light" style={{ width: '20rem' } }>
 <CCardBody>
   <CCardTitle className='text-center'>{props.title}</CCardTitle>
   <CCardText>
    {props.description}<br></br>
    {props.des2}
    </CCardText>
   <CCardText className='fw-bold text-center'>
    {props.des3}<br/>
    {props.des4}
   </CCardText>
 </CCardBody>
</CCard>

 );
}

export default Cardsample;