import React, {useState} from 'react'
import './Fcont.css'

export const Fcontact = () => {

    const [userData, setUserData] = useState({
        name:"",
        email:"",
        message:"",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]: value});
    };

    //Conect with firebase

    const submitData = async (event) => {
        event.preventDefault();
        const { name, email, message} = userData;

        if(name && email && message){
        const res = fetch('https://reactfirebasewebsite-cf8a8-default-rtdb.firebaseio.com/userDataRecords.json',
           {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name, 
                email, 
                message, 
            })
        }
        ); 

        if(res) {
            setUserData({
                name:"",
                email:"",
                message:"",
            });
            alert("data stored");
        } else{
            alert("plz fill data");
        }
    }else{
        alert("plz fill data");
    }
    };



  return (
    <div>
        <form method='POST' id='form' >
            <div id='f-input'>
                <div id='ff'>
                <h2>Or</h2>
                    <input type="text" name="name" id='in' className='form-control' placeholder='Name' value={userData.name} onChange={postUserData} />
                    <input type="email" name="email" id='in' className='form-control' placeholder='Email' value={userData.email} onChange={postUserData} />
                    <input type="textarea" name="message" id='in' className='form-control' placeholder='Message' value={userData.message} onChange={postUserData} />
                    <button type='submit' className='btn btn-style w-50 mb-3 btn-primary' onClick={submitData} >
                        Submit
                    </button>
                </div>
            
            </div>
        </form>
    </div>
  )
}
