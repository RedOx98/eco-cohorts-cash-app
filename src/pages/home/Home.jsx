import './home.scss';

import Topbar from "../../components/navbar/Topbar";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {Link} from 'react-router-dom';



const Home = () => {
    const {user, error} = useContext(AuthContext)
    console.log(user.data);
    return (
        <div className='main'>
            <Topbar/>
            <div className="up">
                <div className="userDetails">
                <div className="left">
                    <img src="https://images.pexels.com/photos/2268487/pexels-photo-2268487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userImg" />
                    <div className="greet">
                        <p className="welcome">Welcome</p>
                        <span className="name">{user.data.fullname}</span>
                    </div>
                    </div>
                    <div className="right">
                    <div className="checkBal">
                        
                        <p className="myBalance">My Balance</p>
                        <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37363896.jpg" alt="" className="balImg" />
                       
                        
                        
                    </div>
                    <span className="balance">N {user.data.account_bal}</span>
                    
                </div>
                </div>
                
                <div className="down">
                    <div className="services">
                        <div className="service">
                            <Link className='link' to='/transfer'>
                            <div className="transfer">
                                <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trfimg" />
                                <span className="trfMoney">Transfer</span>
                            </div>
                            </Link>
                            <div className="transfer">
                                <img src="https://images.pexels.com/photos/7621140/pexels-photo-7621140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trfimg" />
                                <span className="trfMoney">Pay Bills</span>
                            </div>
                        </div>
                        <div className="service">
                            <div className="transfer">
                                <img src="https://images.pexels.com/photos/4386417/pexels-photo-4386417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trfimg" />
                                <span className="trfMoney">Buy Airtime</span>
                            </div>
                            <div className="transfer">
                                <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trfimg" />
                                <span className="trfMoney">Loans</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;