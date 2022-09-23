
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Protected from './Protected/Protected';
import Profile from './Protected/Profile';
import { useEffect, useState } from 'react';
import { getRequest } from './requests/request';
import { useDispatch ,useSelector} from 'react-redux';
import { setIsAuth } from './redux-feature/isauth';
import Signup from './components/Signup';
import Verifymail from './components/Verifymail';
import Footer from './components/Footer';
import Item from './components/Item';
import Searcheditem from './components/Searcheditem';
import Getitem from './components/Getitem';
import Confirm from './Protected/Confirm';
import { setUser } from './redux-feature/user';
import Error from './components/Error';
import { ErrorBoundry } from './components/ErrorBoundry';


function App() {
// const [isAuth,setIsAuth]=useState({})
const isAuth=useSelector((state)=>state.isAuth.value)
const dispatch=useDispatch()
 const setAuth=async ()=>{
 dispatch(setIsAuth(await getRequest('/clientauth')))
 dispatch(setUser(await getRequest('/getuser')))
 }
  useEffect(()=>{
    setAuth()
  
  },[])
  return (
    <div className='main-body'>
      <BrowserRouter>
   <Header />
   <Navbar/>
   <ErrorBoundry>

 <Routes>
<Route path='/' element={ <Home />}/>
<Route path='/blog' element={ <Blog />}/>
<Route path='/about' element={ <About />}/>
<Route path='/contact' element={ <Contact />}/>
<Route path='/login' element={ <Login />}/>
<Route path='/profile' element={<Protected isAuth={isAuth.login} Component={<Profile />}/>}/> 
<Route path='/signup' element={<Signup/>}/>
<Route path='/verifyemail' element={<Verifymail/>}/>
<Route path='/search/:query' element={<Searcheditem/>}/>
<Route path='/item/:id' element={<Item/>}/>
<Route path='/getitem/:id' element={<Getitem/>}/>
<Route path='/confirm' element={<Protected isAuth={isAuth.login} Component={<Confirm/>}/>}/> 
<Route path='*' element={ <Error/>}/>

 </Routes>
   </ErrorBoundry>
 <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
