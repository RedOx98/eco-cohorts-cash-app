import './styles.css';
import ecoLogo from "./image/ecoLogo.jpg";
import ecoImg from "./image/ecoImage.jpg";
import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Register = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
        fullname: undefined,
        account_num: undefined
    });
    // const navigate = useNavigate()
    const handleChange = (e) => {
        setCredentials((prev) =>({...prev,[e.target.id]:e.target.value}));
      }

      const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8800/api/auth/register', credentials);

        setCredentials(res);
      }

      console.log(credentials);
    return (
        <div className="container">
        <div className="head">
            <img src={ecoLogo}alt="ecobanklogo"/>
        </div>
        <div className="middle">
            <img src={ecoImg} alt="326logo"/>
        </div>
        <div className="forms">
            <form className="formInput">
                <p>Already have account? <u><Link to="/login">Login in</Link></u></p>
                <label className='labelDesign' htmlFor="email">Email:</label>
                <input type="email" id="email" onChange={handleChange} required/>
                <label className='labelDesign' htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={handleChange} required/>
                <label className='labelDesign' htmlFor="fullname">Fullname:</label>
                <input type="text" id="fullname" onChange={handleChange} required/>
                <label className='labelDesign' htmlFor="account_num">Account Number:</label>
                <input type="number" id="account_num" onChange={handleChange} required/>
                {/* <label className='labelDesign' for="confirmPasssword">Confirm Password:</label>
                <input type="Password" id="confirmPasssword" onChange={handleChange} required/> */}
            </form>
        </div>
    <div className="tail">
        <p className="signUp"><input type="checkbox" id="checkbox" required/>By Signing up, you agree to recieving updates and special offers.
        </p>
        <button type="submit" className='submitClass' onClick={handleClick}>Submit</button>
        <br/>
    {credentials?'A request already sent your gmail account':<p>an issue must have occured</p>}
    
    </div>
    
    
    </div>
    )
}

export default Register