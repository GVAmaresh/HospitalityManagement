import {Routes, Route } from 'react-router-dom';
import Login from './LoginSignUP/login'
import Food from './FoodCounter/Food';
import HomePage from './Homepage/homePage'
import FindUser from './Receptionist/findUser';
import UpdateUser from './Receptionist/updateUser'
function Network(){
	return<div>
	<Routes>
		<Route path='/' element={<Login/>}></Route>
		<Route path='/FoodCourt' element={<Food/>}></Route>
		<Route exact path='/home' element={<HomePage/>}></Route>
		<Route path='/receptionist/findUser' element={<FindUser/>}></Route>
		<Route path='/receptionist/updateUser' element={<UpdateUser/>}></Route>
</Routes>

</div>
}
export default Network;