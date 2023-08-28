import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signError } from '../error/loginError';
// import {onNav}
function LoginSign() {
  const navigate = useNavigate();
  const [loginTransform, setLoginTransform] = useState('');
  const [error, setError] = useState({ isError: false, message: 'Nothing' });
  const [signUpDetails, setSignUpDetails] = useState({
    email: '',
    password: '',
    fName: '',
    lName: '',
    phoneNumber: '',
  });
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  // -----------------------------LOGIN---------------------------------

  const onLogin = (e) => {
    e.preventDefault();
    // const [hasError, errorMessages] = signError({ ...loginTransform });
    // console.log('error = ', hasError, errorMessages);
    // setError({ isError: error, message: errorMessages });
    // if (loginDetails.isError) return console.log('--ERROR==');
    let responses = '';
    fetch('http://127.0.0.1:9000/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
    })
      .then((res) => {
        responses = res.json();
        console.log(res)
        console.log(responses)
        // if (!res.ok) {
        //   throw new Error(`Network response was not ok: ${res.status}`);
        // }
        return responses;
      })
      .then((data) => {
        console.log(data)
        if (data.status === 'success') {
          if(data.role === 'patient'){
            navigate('/home');
          }
          else if(data.role === 'receptionist'){
            navigate('/receptionist/findUser')
          }
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  };

  // -----------------------------SIGNUP---------------------------------

  const onSignUp = (e) => {
    e.preventDefault();
    // const [hasError, errorMessages] = signError({ ...signUpDetails });
    // console.log('error = ', hasError, errorMessages);
    // setError({ isError: error, message: errorMessages });
    // if (signUpDetails.isError) return console.log('--ERROR==');
    let responses = '';
    fetch('http://127.0.0.1:9000/user/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpDetails),
    })
      .then((res) => {
        responses = res.json();
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return responses;
      })
      .then((data) => {
        if (data.status === 'success') {
          navigate('/home');
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  };

  // -------------------------------------------------------------------------------------------

  return (
    <div className='myLogin'>
      <div className='loginSign'>
        <div
          className='loginAndSign'
          onClick={(e) => {
            e.target.className !== 'login' && e.target.className !== '' && setLoginTransform('');
          }}
        >
          <div className='sign'>
            <h1 className='signHeading'>Sign up</h1>
            <div className='names'>
              <input
                type='text'
                id='fname'
                name='fname'
                required
                minLength='3'
                placeholder='First Name'
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    fName: e.target.value.trim(),
                  })
                }
              />
              <input
                type='text'
                id='lname'
                name='lname'
                required
                minLength='3'
                maxLength='10'
                placeholder='Last Name'
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    lName: e.target.value.trim(),
                  })
                }
              />
            </div>
            <input
              type='phone number'
              id='phno'
              name='name'
              required
              maxLength='10'
              placeholder='Phone Number'
              onChange={(e) =>
                setSignUpDetails({
                  ...signUpDetails,
                  phoneNumber: e.target.value.trim(),
                })
              }
            />
            <br />
            <input
              type='email'
              id='email'
              name='name'
              required
              maxLength='40'
              placeholder='Email'
              onChange={(e) =>
                setSignUpDetails({
                  ...signUpDetails,
                  email: e.target.value.trim(),
                })
              }
            />
            <br />
            <input
              type='password'
              id='pwd'
              name='name'
              required
              minLength='4'
              maxLength='20'
              placeholder='Password'
              onChange={(e) =>
                setSignUpDetails({
                  ...signUpDetails,
                  password: e.target.value.trim(),
                })
              }
            />
            {error.isError && <p className='errorSign'>**{error.message}**</p>}
            <div className='submit' onClick={onSignUp}>
              Sign up
            </div>
            <br />
          </div>
          {/* -------------------------------------------------------------------------------------------           */}
          <div
            className='login'
            onClick={() => setLoginTransform('translateY(-500px)')}
            style={{
              transform: `${
                loginTransform === 'translateY(-500px)'
                  ? 'translateY(-500px)'
                  : ''
              }`,
            }}
          >
            <h1 className='loginHeading'>Login </h1>
            <input
              type='email'
              id='lgemail'
              name='name'
              required
              minLength='4'
              maxLength='40'
              placeholder='Email'
              onChange={(e) =>
                setLoginDetails({...loginDetails, 
                  email: e.target.value.trim(),
                })
              }
            />
            <br />
            <input
              type='password'
              id='lgpwd'
              name='name'
              required
              minLength='4'
              maxLength='40'
              placeholder='Password'
              onChange={(e) =>
                setLoginDetails({...loginDetails, 
                  password: e.target.value.trim(),
                })
              }
            />
            <div className='lgsubmit' onClick={onLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginSign;
