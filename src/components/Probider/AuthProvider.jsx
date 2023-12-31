import { createUserWithEmailAndPassword,GoogleAuthProvider,  signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../Firebase';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const singInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
        });
        return () => {
            unSubscribe()
        };
    }, []);
    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        singInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;