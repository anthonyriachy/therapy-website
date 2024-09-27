import { createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../utils/firebase.js"


const initialState={
    user:null,
    token:null,
    loading:null,
    error:null,
    emailVerified:false
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLoading(state,action){
            state.loading=action.payload
        },
        setUser(state,action){
            const { uid, email, displayName } = action.payload;
            state.user = { uid, email, displayName };

        },
        setToken(state,action){
            state.token=action.payload
        },

        setError(state, action) {
                state.error = action.payload ? (action.payload.code ? action.payload.code : action.payload) : null;
        },
        logOut(state){
            state.user=null
            state.token=null
            state.error=null
        },
        setEmailVerified(state, action) {
            state.emailVerified = action.payload;
        }
    }
})

export  const {setLoading,setUser,setToken,setError,logOut,setEmailVerified }=authSlice.actions
export default authSlice.reducer

export const signUp =(email,password)=>async (dispatch)=>{
    console.log('dispatch function called '+email,password)


    dispatch(setLoading(true));
    try {
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const token=await userCredential.user.getIdToken();
        await sendEmailVerification(userCredential.user);
        dispatch(setUser(userCredential.user))
        dispatch(setToken(token))
        dispatch(setEmailVerified(userCredential.user.emailVerified));
        localStorage.setItem('token', token);
    } catch (error) {
        dispatch(setError(error))
        throw error
    }finally{
        dispatch(setLoading(false))
    }
}

export const signIn =(email,password)=>async (dispatch)=>{
    dispatch(setLoading(true));
    try {
        console.log(email+password)
        const userCredential=await signInWithEmailAndPassword(auth,email,password)
        const user =userCredential.user
        const token=await userCredential.user.getIdToken();
        // Check if email is verified
        if (!user.emailVerified) {
            sendEmailVerification(user);
            dispatch(setError("Please verify your email before logging in."));
            dispatch(setEmailVerified(false));
            return;
        }
        dispatch(setUser(user))
        dispatch(setToken(token))
        dispatch(setEmailVerified(user.emailVerified));
        localStorage.setItem('token', token);
    }catch (error) {
        dispatch(setError(error))
        throw error
    }finally{
        dispatch(setLoading(false))
    }
}