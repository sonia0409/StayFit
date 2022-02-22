import { useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import '../styles/LoginSignup.scss';

export default function Login(props) {
  const { showSignup } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className="container-login">
        <form autoComplete="off" className="login" onSubmit={onSubmit}>
          <h3>StayFit...Logo here.</h3>
          <div className="username">
            <input type="text" name="username"
              value={email} placeholder="Enter Username or email"
              onChange={event => setEmail(event.target.value)}
            />
          </div> 
          <div>
            <input type="password" name="password"
              value={password} placeholder="Password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className="submit">
            {/* Signup? */}
          {/* <button type="button" onClick={() => showSignup()}>Signup</button> */}
          <div className="toggle-signup" onClick={() => showSignup()}>Signup</div>
            <button type="submit" name="commit">Login</button>
          </div>
        </form>

    </div>
  );
};