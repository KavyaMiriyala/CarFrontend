// import React from 'react'; 
// import { Outlet, NavLink,Link } from 'react-router-dom' 
// import {sign} from'./Signup';
// export function sign(){ 
//     return ( 
//         <div className='mt-3'> 
//         {/* links */} 
//         <ul className="nav nav-pills justify-content-around"> 
//             <li className="nav-item"> 
//                 <NavLink className="nav-link" to="SignUp">Sign Up</NavLink> 
//             </li> 
//         </ul> 
//         {/* place holder for components */} 
//         <div className="container"> 
//             <Outlet /> 
//         </div> 
//     </div> 
// ) 
//     }
// export default sign


import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'


function sign(){
    return (
        <div className='mt-3'>
        {/* links */}
        <ul className="nav nav-pills justify-content-around">
            <li className="nav-item">
                <NavLink className="nav-link" to="SignIn">Log In</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="SignUp">Create Account</NavLink>
            </li>
        </ul>
        {/* place holder for components */}
        <div className="container">
            <Outlet />
        </div>
    </div>
)
}
export default sign
