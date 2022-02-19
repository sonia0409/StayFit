import { createContext, useState } from 'react';
import axios from 'axios';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = async function(email, password) {

    await axios.get(`http://localhost:8080/users/${email}`)
      .then((response) => {
        const userDetails = response.data[0];
        const {id, email, name } = userDetails;
        
        if(password === userDetails.password) {
          setUser({ email, id, name });
          setAuth(true);
        } 
      })
      .catch(e => console.log(e))
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  const signup = async function(newUserObj) {
    const {
      firstName,
      lastName,
      email,
      password,
    } = newUserObj;

    await axios.post(`http://localhost:8080/users`, newUserObj)
      .then((data) => console.log(data));
  }

  // authContext will expose these items
  const userData = { auth, user, login, logout, signup };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};