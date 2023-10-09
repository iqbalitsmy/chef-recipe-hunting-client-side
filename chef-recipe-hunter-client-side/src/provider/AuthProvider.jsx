import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = React.createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Create user with email and password
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    // Google
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Github
    const signInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

    // update profile
    const signInUpdateProfile = (name, photo) => {
        setIsLoading(true);
        return (updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }
        ))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setIsLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        signInUpdateProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;