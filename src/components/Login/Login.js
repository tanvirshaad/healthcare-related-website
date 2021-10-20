import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

function App() {
    const {
        handleRegistration,
        isLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        error,
        signInUsingGoogle,
    } = useAuth();

    return (
        <div className="mx-5 my-3 px-5">
            <Container>
                <div>
                    <form
                        style={{
                            margin: '0px 200px',
                        }}
                        onSubmit={handleRegistration}
                    >
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
                            onClick={signInUsingGoogle}
                            className="btn btn-danger my-3 mx-2"
                        >
                            Sign In With Google
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
