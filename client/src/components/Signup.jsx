import { useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import '../styles/LoginSignup.scss';

export default function Signup(props) {
  const { showLogin } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useContext(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    const userObj = { firstName, lastName, email, password };
    signup(userObj);
    showLogin()
  };

  return (
    <div className="container-login">

        <form className="signup" onSubmit={onSubmit}>
          <h3>Join the StayFit community:</h3>
          <div className="firstName">
            <input autoComplete="off" type="text" name="firstName"
              value={firstName} placeholder="Enter first name"
              onChange={event => setFirstName(event.target.value)}
            />
          </div> 
          <div className="lastName">
            <input autoComplete="off" type="text" name="lastName"
              value={lastName} placeholder="Enter last name"
              onChange={event => setLastName(event.target.value)}
            />
          </div> 
          <div className="email">
            <input autoComplete="off" type="text" name="email"
              value={email} placeholder="Enter email"
              onChange={event => setEmail(event.target.value)}
            />
          </div> 
          <div>
            <input type="password" name="password"
              value={password} placeholder="Password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          {/* <div className="errorMessage">{errorMessage}</div> */}
          <div className="submit">
            {/* <button type="button" onClick={() => showLogin()} >
              Back
            </button> */}
            <div className="toggle-login" onClick={() => showLogin()}>Login</div>
            <button type="submit" name="commit">Signup</button>
          </div>
        </form>

    </div>
  );
};