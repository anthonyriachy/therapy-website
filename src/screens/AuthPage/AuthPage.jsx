// /* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setError, signIn, signUp } from '../../redux/slices/authSlice';
// import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

function AuthPage() {
  const dispatch=useDispatch();
  const error=useSelector((state)=>state.auth.error);
  const navigate=useNavigate();

  const [isSignUp, setIsSignUp] = useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('')

  const toggleAuthMode = () => {
    dispatch(setError(null))
    setEmail('')
    setPassword('')
    setName('')
    setIsSignUp(!isSignUp);
  };


  const handleSignIn = () => {
    dispatch(signIn(email, password))
    .then(() => {
      navigate('/');
    })
    .catch(error => console.error("Sign in failed", error));
  };

  const handleSignup = () => {
     dispatch(signUp(email, password ))
     .then((response)=>{
      console.log("response in sign up"+response)
        navigate('/');
     })
     .catch(error => console.error("Sign up failed", error));
  };

 
  return (
    <div className={`auth-container ${isSignUp ? 'sign-up-mode' : 'sign-in-mode'}`}>
      <div className="auth-background">
        <div className="auth-overlay">
          <h2>{isSignUp ? 
            <>
              <h1 className='register-side-header'>Welcome Back!</h1>
              <p className='register-sidep-p'>To keep connected with us please <br /> sign in with you personal information</p>
            </>
           : 
           <>
            <h1 className='register-side-header'>Hello, Friend!</h1>
            <p className='register-sidep-p'>Enter your personal details <br /> and start journey with us</p>
           </>
           }</h2>
          <button onClick={toggleAuthMode} className='register-side-button'>
            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </div>
      </div>
      <div className="auth-form">
        {isSignUp ? (
          <div className="sign-up-form">
            <h2 className='register-header'>Create Account</h2>
            <section className='register-options'>
            <div className='register-option'>
                  <BiLogoGmail size={25}/>
              </div>
              <div className='register-option'>
                  <FaFacebookF size={25}/>
              </div>

            </section>
            <p className='registe-small-text'>or use your email for registration:</p>
            {error && <p className='register-error'>{error.replace('auth/', '')}</p>}
            <input type="text" placeholder="Name" name='Name'className='register-input' value={name} onChange={(e)=>setName(e.target.value)} autoComplete='name'/>
            <input type="email" placeholder="Email" name='Email'className='register-input' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='email'/>
            <input type="password" placeholder="Password" name='Password'className='register-input' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='password'/>
            <button onClick={handleSignup} className='register-button'>SIGN UP</button>
          </div>
        ) : (
          <div className="sign-in-form">
            <h2 className='register-header'>Sign In To Therapy</h2>
            <section className='register-options'>
 
            <div className='register-option'>
                <BiLogoGmail size={25}/>
            </div>
            <div className='register-option'>
                <FaFacebookF size={25}/>
            </div>

            </section>
            <p className='registe-small-text'>or use your email for registration:</p>
            {error && <p className='register-error'>{error.replace('auth/', '')}</p>}
            <input type="email" placeholder="Email" name='Email' className='register-input' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='email'/>
            <input type="password" placeholder="Password" name='Password' className='register-input' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='password'/>
            <button onClick={handleSignIn} className='register-button'>SIGN IN</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
