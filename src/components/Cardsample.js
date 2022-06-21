import React from 'react'
import {CButton,CCardBody,CCardImage,CCardText,CCard,CCardTitle} from '@coreui/react';
function Cardsample() {
  return (
    <div className="container-fluid d-flex justify-content-evenly">
    <div className='row'>
    <div className='col-md-4'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/cars/aspire/_jcr_content/par/brandgallery_69428842/image1/image.imgs.full.high.jpg/1537443564777.jpg"
       title="Titanium"
       description=" Featuring a striking-look, a commanding stance and dynamic design."
       add="https://www.india.ford.com/suvs/freestyle/"
     />
     </div>
     <div className='col-md-4'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/cars/figo/_jcr_content/par/brandgallery_69428842/image1/image.imgs.full.high.jpg/1626760636390.jpg"
       title="Ecosport"
       description=" Featuring a striking-look, a commanding stance and dynamic design."
       add="https://www.india.ford.com/cars/figo/"
     />
</div>
<div className='col-md-4'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/suvs/freestyle/_jcr_content/par/brandgallery/image1/image.imgs.full.high.jpg/1545119844657.jpg"
       title="Figo"
       description=" Featuring a striking-look, a commanding stance and dynamic design."
       add="https://www.india.ford.com/suvs/freestyle/"
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
<CCard className="ck" style={{ width: '20rem' } }>
 <CCardImage orientation="top" src={props.img}/>
 <CCardBody>
   <CCardTitle>{props.title}</CCardTitle>
   <CCardText>
    {props.description}
   </CCardText>
   
   <CButton href={props.add} target ="_blank" className='mx-5 px-5'>Find More</CButton>
 </CCardBody>
</CCard>

 );
}

export default Cardsample;