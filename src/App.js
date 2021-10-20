import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Experts from './components/Experts/Experts';
import Login from './components/Login/Login';
import About from './components/About/About';
import AuthProvider from './contexts/AuthProvider';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/experts">
                            <Experts></Experts>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
