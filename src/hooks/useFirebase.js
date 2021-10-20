import initializeAuthentication from '../components/Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider).then((result) => {
            setUser(result.user);
            console.log(result.user);
        });
    };

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleRegistration = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase');
            return;
        }
        isLogin
            ? processLogin(email, password)
            : registerNewUser(email, password);
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then(
            (result) => {}
        );
    };
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then((result) => {
            console.log(result);
        });
    };

    const logOut = () => {
        signOut(auth).then(() => {});
    };

    return {
        user,
        handleRegistration,
        isLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        error,
        signInUsingGoogle,
        logOut,
    };
};

export default useFirebase;
