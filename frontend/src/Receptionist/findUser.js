import './receptionist.css';
import  {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function FindUser() {
	const navigate = useNavigate();
	const [user, setUser] = useState({name:'', email:''})
	function onSubmit(){
		fetch('http://127.0.0.1:9000/receptionist/findUser', {
			method: 'post',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({...user})
		}).then((res)=>{
			const response = res.json()
			if(!res.ok){
				throw new Error(`Network response was not ok: ${res.status}`);
			}
			return response
		}).then(data=>{
			if(data.status === 'success'){
				navigate('/receptionist/updateUser');
			}
		})
	}
  return (
    <div className='findUser'>
			<h1 className='findUser_title'>Find The Patient</h1>
      <div>
        <input className='findUser_name' placeholder='Name...' onChange={(e)=>setUser({...user, name:e.target.value})}/>
      </div>
      <div>
        <input className='findUser_email' placeholder='Email...' onChange={(e)=>setUser({...user, email:e.target.value})} />
      </div>
			<div className='submit' onClick={onSubmit}>
				Submit
			</div>
    </div>
  );
}
export default FindUser;
