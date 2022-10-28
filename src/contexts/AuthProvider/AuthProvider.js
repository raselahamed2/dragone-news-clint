import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config'

export const AuthContext = createContext(); 

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider) =>
    {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    } ,[])

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

        const signIn = (email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(email, password)
        }
        const updateUserProfile = profile => {
            return updateProfile(auth.currentUser, profile)
        }

        const verifyEmail = () =>{
            return sendEmailVerification()
        }

    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {user, providerLogin, LogOut, createUser, signIn, verifyEmail, loading, updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;