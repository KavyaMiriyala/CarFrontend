import React from 'react'
import {useForm} from 'react-hook-form'
import {useState} from 'react';
import axios from 'axios';
import {CButton} from '@coreui/react';
function Signup() {
    var counter=0
    let [users, setUsersList] = useState([])
    
    const {register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors)

function onsub(userObj){
    // console.log(userObj)
    // let res=await axios.post("http://localhost:4000/Customers",userObj)
    // let message = res.data;
    // alert ("Account Created successfully!")
    // setUsersList([...users, userObj])
    // setTimeout(function(){window.location.reload();},5000);
    console.log(userObj);
    fetch('https://car-api-9d8fe-default-rtdb.firebaseio.com/cardataApi.json',{
        method:'POST',
        body:JSON.stringify(userObj),
        headers:{
'Content-Type':'application/json'
        }
    }
    );
}


function count(){
    var counter=0
    counter=counter+1
    console.log(count)
}

    return (
        <div className='mt-2'>
            <p className="display-6 text-center fw-bold lead mt-5">Create Account</p>
            <p className="lead text-center">
                Get started with your free account
            </p>

           <div className=' text-center twit'>
           <CButton href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"  className='mx-5 px-5 mt-2'>Login via Twitter</CButton>
            </div>
            <div className=' text-center'>
            <CButton href="https://www.google.com/intl/en-GB/gmail/about/"  className='mx-5 px-5 mt-2'>Login via Google</CButton>
            </div>
            <div className='text-center mt-3 mb-3'>OR</div><hr></hr>
        <div>
        
             <form className='mb-3 w-25 mx-auto' onSubmit={handleSubmit(onsub)}>
                 <div className='mb-3'>
                     <label htmlFor='Username' >CustomerName<span className='text-danger'> *</span></label>
                     <input type="text" name="" id="Username" className="form-control" {...register("Username",{minLength:3,maxLength:30,required:true})} ></input>
                     {errors.UserName?.type==='required' && <p className='text-danger'>Customername is required</p>}
    
                    {errors.Username?.type === 'required' && <p className='text-danger'>* Customername is required</p>}
                   
                    {errors.Username?.type === 'minLength' && <p className='text-danger'>* Minimum length required:3</p>}
                   
                    {errors.Username?.type === 'maxLength' && <p className='text-danger'>* Exceeding limit:30</p>}

                 </div>
                 <div className='mb-3 '>
                     <label htmlFor='email'>Email<span className='text-danger'> *</span></label>
                     <input type="email" name="" id="email" className="form-control" {...register("email",{ required: true })} ></input>
                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     {errors.email?.type === 'required' && <p className='text-danger'>* This field is required</p>}
                 </div>
                <div className='row '> 
                 <div className='mb-3'>
                     <label htmlFor='password'>Create Password<span className='text-danger'> *</span></label>
                     <input type="password" name="" id="password" className="form-control" {...register("password",{minLength:'8',required:true})}/>
                     {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 8</p>}
                 </div>

                 <div className='mb-3'>
                     <label htmlFor='cpassword'>Confirm Password<span className='text-danger'> *</span></label>
                     <input type="password" name="" id="cpassword" className="form-control" {...register("cpassword",{minLength:'8'})}></input>
                     
                 </div>
                 <small  className="form-text text-muted">Your password must be 8-20 characters long, contain letters, numbers and special characters.</small>
       
                 </div>
                 <div className='mb-3 mt-4'>
                     <label htmlFor='dob'>Date of Birth<span className='text-danger'> *</span></label>
                     <input type="date" name="" id="dob" className="form-control" {...register("dob",{ required: true })} ></input>
                     {errors.dob?.type === 'required' && <p className='text-danger'>* Date Of Birth is required</p>}
                 </div>
            
                      <label>Gender<span className='text-danger'> *</span></label>
                  
                 <div className='mt-2' >
                     <input type="radio" name="gender" id="male" {...register("Gender",{ required: true })} value="Male" ></input>
                     <label htmlFor='male'className='mx-2'>Male</label>
                </div>
                    
                <div  >
                     <input type="radio" name="gender" id="female" value="Female" {...register("Gender")} ></input>
                     <label htmlFor='female'className='mx-2'>Female</label>
                     {errors.Gender?.type === 'required' && <p className='text-danger'>* This field is required</p>}
                 </div>

                 <div className='form-radio'>
                     <input type="radio" name="gender" id="Other" {...register("Gender")}  value="Other"></input>
                     <label htmlFor='Other' className='mx-2'>Other</label>
                 </div>
                 <div className="form-group">
    <label htmlFor="Address" className='mt-2'>Address<span className='text-danger'> *</span></label>
    <input type="text" className="form-control " {...register("Address",{ required: true })} id="Address"/>
    {errors.Address?.type === 'required' && <p className='text-danger'>* This field is required</p>}
  </div>
  <div className="form-row row mt-2">
    <div className="form-group col-md-4">
      <label for="City">City<span className='text-danger'> *</span></label>
      <input type="text" className="form-control" {...register("City",{ required: true })} id="City"/>
      {errors.City?.type === 'required' && <p className='text-danger'>* This field is required</p>}
    </div>
    <div className="form-group col-md-4 ">
      <label for="State">State<span className='text-danger'> *</span></label>
      <select id="State" className="form-control" {...register("State",{ required: true })} >
        <option default>State</option>
        <option>AndhraPradesh</option>
        <option>Delhi</option>
        <option>Telangana</option>
        <option>Karnataka</option>
        <option>Kolkata</option>
      </select>
      {errors.State?.type === 'required' && <p className='text-danger'>* This field is required</p>}
    </div>
    <div className="form-group col-md-4">
      <label for="Zip">Zip<span className='text-danger'> *</span></label>
      <input type="text" class="form-control" {...register("Zip",{ required: true })} id="Zip"/>
    </div>

  </div>
                  <label className=" mt-4">Terms & Services </label>
                  <div  className="form-check mt-2">
                      
               <input type="checkbox" className="form-check-input" id="Check" {...register("Check",{ required: true })}/>
               <label  htmlFor="Check" className="form-check-label">I abide by Privacy Policy.</label>
               {errors.Check?.type === 'required' && <p className='text-danger'>* Check out this to submit</p>}
                 </div>

                    <button className="btn btn-success d-block mx-auto mt-5" type='submit' onClick={()=> count(counter)}>Submit
                    </button>
                     </form>
                </div>

 
        <div className='text-center container'  onSubmit={handleSubmit(onsub)} >
        {/* table */}
       {users.length!==0 && <h1>Received Details</h1>}
       {users.length !== 0 && 
        <table className="table  table-hover table-bordered table-striped text-dark">
            
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>DateofBirth</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((userObj,index)=><tr key={index}>
                            <td>{index+1}</td>
                            <td>{userObj.Username}</td>
                            <td>{userObj.email}</td>
                            <td>{userObj.dob}</td>
                            <td>{userObj.Gender}</td>
                            <td>{userObj.Address}</td>
                            <td>{userObj.City}</td>
                            <td>{userObj.State}</td>
                            <td>{userObj.Zip}</td>
                        </tr>)
                }
            </tbody>
 </table>
}
    </div>

        </div>
          
    )

}
export default Signup