  import { Route, Routes, useLocation } from 'react-router-dom'
  import './App.css'
  import  Home  from './screens/Home.jsx'
  import  Error  from './Error.jsx'
  import NavBar from './components/NavBar/NavBar.jsx'
  import { useDispatch } from 'react-redux'
  import { useEffect } from 'react'
  import { setToken, setUser, signIn, signUp } from './redux/slices/authSlice.js'
  import { getIdToken, onAuthStateChanged } from 'firebase/auth'
  import { auth } from './utils/firebase.js'
  import TherapistPage from './screens/TherapistsDev/TherapistsDev.jsx'
  import Therapist from './screens/Therapist.jsx'
  import AuthPage from './screens/AuthPage/AuthPage.jsx'
  function App() {
    const dispatch=useDispatch();
    const location=useLocation();
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


    return (
      <>
      {location.pathname!=="/register" && <NavBar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<AuthPage/>} />
          <Route path="/therapist/:id" element={<Therapist/>} />



          <Route path="/therapistsdev" element={<TherapistPage/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </>
    )
  }

  export default App
