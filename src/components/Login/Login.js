import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
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

    const location = useLocation();
    const history = useHistory();
    // from where we are coming(location.state.from)
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        });
    };

    return (
        <div className="mx-auto py-5 mt-3 my-3 px-5">
            <Container>
                <div style={{ marginBottom: '100px' }}>
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
                            onClick={handleGoogleLogin}
                            className="btn btn-info my-3 mx-2"
                        >
                            Sign In With Google
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default App;
