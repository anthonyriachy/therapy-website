import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import  Home  from './screens/Home.jsx'
import  Error  from './Error.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setToken, setUser, signIn, signUp } from './redux/slices/authSlice.js'
import { getIdToken, onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase.js'
import Signup from './screens/SignUp.jsx'
import SignIn from './screens/SignIn.jsx'
import TherapistPage from './screens/TherapistsDev/TherapistsDev.jsx'
function App() {
  const dispatch=useDispatch();
  const navigate = useNavigate(); // <-- useNavigate hook

  //i think you need if the token is not, redirect or semething
  //check for token
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) { 
      dispatch(setToken(savedToken));
    }
  }, [dispatch]);

  //when token i refreshed
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,async(user)=>{
        if(user){
          const token=await getIdToken(user);
          const { uid, email, displayName } = user; 
          dispatch(setUser({ uid, email, displayName }));

          dispatch(setToken(token));
          localStorage.setItem('token',token);
        }else{
          dispatch(setToken(null));
          localStorage.removeItem('token');
        }
    }) 
    return()=>unsubscribe()
  },[dispatch])

  const handleSignIn = (email, password) => {
    dispatch(signIn(email, password))
    .then(() => {
      navigate('/');
    })
    .catch(error => console.error("Sign in failed", error));
  };

  const handleSignup = (email, password) => {
     dispatch(signUp(email, password ))
     .then(()=>{
        navigate('/');
     })
     .catch(error => console.error("Sign up failed", error));
  };


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup onSignup={handleSignup}/>} />
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn}/>} />



        <Route path="/therapistsdev" element={<TherapistPage/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
