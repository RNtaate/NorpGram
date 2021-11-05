import './App.css';
import Signup from '../Auth/Signup';
import Dashboard from './Dashboard';
import Login from '../Auth/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../Auth/ForgotPassword';
import UpdateProfile from '../Auth/UpdateProfile';

function App() {
  return (

    <Container
      className="d-flex justify-content-center align-items-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/update_profile" component={UpdateProfile} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot_password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
