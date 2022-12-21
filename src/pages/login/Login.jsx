import ecoLogo from './image/ecoLogo.png';
import ecoPic from './image/ecoPic.png';
import message from './image/message.png';
import "./login.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';




const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev)=>({...prev, [e.target.id]:e.target.value}));
    };

    console.log(credentials);

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type: 'LOGIN START'});
        try {
            const res = await axios.post('http://localhost:8800/api/users/', credentials);
            dispatch({type: 'LOGIN SUCCESS', payload: res.data});
            navigate('/');
        } catch (err) {
            dispatch({type: 'LOGIN FAILURE',
        payload: err.response.data})
        }
    }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="email" id='email' onChange={handleChange} />
            <input type="password" placeholder="Password" id='password' onChange={handleChange} />
            <button onClick={handleClick}>Login</button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
