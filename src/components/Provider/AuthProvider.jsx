import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth=getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const axiosPublic=UseAxiosPublic();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            // if(currentUser){
            //     // saveUser(currentUser);
            //     const userInfo={email:currentUser.email}
            //     axiosPublic.post('/jwt',userInfo)
            //     .then(res=>{
            //         console.log('token',res.data.token)
            //         localStorage.setItem('Access-token',res.data.token)
            //         setLoading(false)
            //     })

            // }
            // else{
            //     localStorage.removeItem('Access-token');
            //     setLoading(false)
            // }

        });
        return () => {
            return unSubscribe;
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// Job-task
// 5UlgexerNLRqic5n