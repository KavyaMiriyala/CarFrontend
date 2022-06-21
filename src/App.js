import './App.css';
import {Routes, Route,Navigate,NavLink} from 'react-router-dom'; 
import Contactus from './components/Contactus'; 
import BuyaCar from './components/BuyaCar'; 
import FindaCar from './components/FindaCar'; 
import Signin from './components/Signin'; 
import Signup from './components/Signup'; 


function App() {
    return (
        <div > 
        <nav className="navbar navbar-expand-lg sticky-top bg-white"> 
          <div className="container-fluid"> 
            <a className="navbar-brand mx-5 text-black" href="#">CarIndia</a> 
            <button className="navbar-toggler bg-info" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
              <span className="navbar-toggler-icon"></span> 
            </button> 
            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
              <ul className="navbar-nav ms-auto"> 
                {/* link for find */} 
                <li className="nav-item"> 
                  <NavLink className="nav-link me-5 text-black" to="">Find A Car</NavLink> 
                </li> 
                {/* link for buy */} 
                <li className="nav-item"> 
                  <NavLink className="nav-link me-5 text-black" to="BuyaCar">Buy a Car</NavLink> 
                </li> 
                 {/* link for contactus*/} 
                 <li className="nav-item"> 
                  <NavLink className="nav-link me-5 text-black" to="Contactus">Contact Us</NavLink> 
                </li> 
              </ul> 
            </div> 
          </div> 
        </nav>
        {/* <ImageSlider slides={SliderData}/>
        <h1 className='mt-5 text-center'>Models</h1>
        <ImageSlider slides={CarData}/>
        <h1 className='text-center'>Display Cars</h1>
        <Cardsample/>
        <Carfooter/> */}
        <Routes> 
         
            <Route path="" element={<FindaCar/>}/> 
            <Route path="Contactus" element={<Contactus/>}/> 
            <Route path="BuyaCar" element={<BuyaCar/>}>  
            <Route path = "signin" element={<Signin/>}/>
            <Route path="" element={<Navigate replace to="SignUp"/>}/>// to load signup page while loading of register  
            <Route path = "signup" element={<Signup/>}/>
            </Route>
      </Routes> 
       
</div>
  );
} 

export default App;
