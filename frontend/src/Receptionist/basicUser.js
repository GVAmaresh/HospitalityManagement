import './receptionist.css'
function BasicUser({name, address, email}) {
	return (
		<div className='basicUser'>
			<div className='basicUser_name'>Name: {name}</div>
			<div className='basicUser_email'>Email: {email}</div>
			<div className='basicUser_age'>Address: {address}</div>
		</div>
	)
}

export default BasicUser
