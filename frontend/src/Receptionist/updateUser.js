import './receptionist.css';
import UpdateRep from './updateRep';
import BasicUser from './basicUser';
import Treatment from './treatment';
import { useState, useEffect } from 'react';
let treatment=['']
function UpdateUser() {
  const [myData, setMyData] = useState({}); 
  let expand = '';
  useEffect(() => {
    fetch('http://127.0.0.1:9000/receptionist/passUser', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) =>{
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response.json())
        return response.json()})
      .then((data) => {
        console.log('------> ', data.user);
        setMyData(data.user); 
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className='updateUser'>
      <div className='updateUser_photo'></div>
      <div className='updateUser_photoCut'></div>
      <div className='updateUser_detail'>
        <BasicUser
          name={myData.fName||'Lohish'}
          address={myData.address|| 'basavanagudi'}
          email={myData.email|| 'lohi@gmail.com'}
        />
      </div>
      <div className='updateUser_treatment'>
        <h1 className='updateUser_subHeading'>Treatment</h1>
        {
          myData.treatment||treatment.map((treatment, index) => (
            <Treatment key={index} treatment={treatment} />
          ))
        
          // <p> </p>
        }
        <UpdateRep />
      </div>
    </div>
  );
}

export default UpdateUser;

// import './receptionist.css';
// import UpdateRep from './updateRep';
// import BasicUser from './basicUser';
// import Treatment from './treatment';
// import {useState} from 'react'
// function UpdateUser() {
//   let myNewdata=''
//   let [myData, setMyData] = useState({})
//   fetch('http://127.0.0.1:9000/receptionist/updateUser', {
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('------> ',data);
//       myNewdata = data
//     })
//     .catch((error) => console.error('Fetch error:', error));
//   return (
//     <div className='updateUser'>
//       <div className='updateUser_photo'></div>
//       <div className='updateUser_photoCut'></div>
//       <div className='updateUser_detail'>
//         <BasicUser
//           name='Amaresh' age={21} email='resha032@gmail.com'
//         />
//       </div>
//       <div className='updateUser_treatment'>
//         <h1 className='updateUser_subHeading'>Treatment</h1>
//         <Treatment/>
//         <Treatment/>
//         <UpdateRep/>
//       </div>
//     </div>
//   );
// }

// export default UpdateUser;
