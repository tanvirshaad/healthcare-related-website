import initializeAuthentication from '../Firebase/firebase.init';
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
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

initializeAuthentication();

function App() {
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
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email).then((result) => {});
    };

    return (
        <div className="mx-5 my-3 px-5">
            <Container>
                <div>
                    <form onSubmit={handleRegistration}>
                        <h3 className="text-primary">
                            Please {isLogin ? 'Login' : 'Register'}
                        </h3>
                        {/* name */}
                        {!isLogin && (
                            <div className="row mb-3">
                                <label
                                    htmlFor="inputName"
                                    className="col-sm-2 col-form-label"
                                >
                                    Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        onBlur={handleNameChange}
                                        type="text"
                                        className="form-control"
                                        id="inputEmail3"
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>
                        )}
                        {/* email */}
                        <div className="row mb-3">
                            <label
                                htmlFor="inputEmail3"
                                className="col-sm-2 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    onBlur={handleEmailChange}
                                    type="email"
                                    className="form-control"
                                    id="inputEmail3"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="inputPassword3"
                                className="col-sm-2 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    onBlur={handlePasswordChange}
                                    type="password"
                                    className="form-control"
                                    id="inputPassword3"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input
                                        onChange={toggleLogin}
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="gridCheck1"
                                    >
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        <button
                            type="button"
                            onClick={handleResetPassword}
                            className="btn btn-secondary ms-3"
                        >
                            Reset Password
                        </button>
                        <br />
                        <button
                            type="button"
                            onClick={signInUsingGoogle}
                            className="btn btn-danger my-3"
                        >
                            Google
                        </button>
                    </form>
                    {/* <button onClick={handleGoogleSignin}>Google Sign In</button> */}
                </div>
            </Container>
        </div>
    );
}

export default App;

/*
    password strength checker(regex)
        (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
        (?=.*[!@#$&*])            Ensure string has one special case letter.
        (?=.*[0-9].*[0-9])        Ensure string has two digits.
        (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
        .{8}                      Ensure string is of length 8.
        $                         End anchor.
*/
