import { useContext, useState } from 'react';
import Topbar from '../../components/navbar/Topbar';
import './transfer.scss';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Transfer = () => {
    const [items, setItems] = useState({
        sender_acct: undefined,
        recipient_acct: undefined,
        recipient_bank: undefined,
        amount: undefined,
        remark: undefined
    })

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setItems((prev)=>({...prev, [e.target.id]:e.target.value}));
    };

    const handleClick = async (e) =>{
        e.preventDefault();
        const pay = await axios.post('http://localhost:8800/api/transfers/transfer', items);
        setItems(pay.message);
        // console.log(pay.message);
        navigate('/')
    }
    console.log(user.tokenVerify);
    console.log(items);
    
    return <div className='benefit'>
        <Topbar/>

        
        <div className="form">

        
        <form className='formInp'>

        <h1 className="beneficiary">Beneficiary</h1>
            <label htmlFor="sender_acct" className="tag">Your Account Number</label>
            <input id='sender_acct' type="number" className="inputForm" placeholder='Account Number' onChange={handleChange}/>
            <label htmlFor="recipient_acct" className="tag">Beneficiary Account Number</label>
            <input id='recipient_acct' type="number" className="inputForm" placeholder='Account Number'  onChange={handleChange}/>
            <label htmlFor="recipient_bank" className="tag">Recipient Bank</label>
            <input id='recipient_bank' type="text" className="inputForm" placeholder='Name' onChange={handleChange}/>
            <label htmlFor="amount" className="tag">Amount</label>
            <input id='amount' type="number" className="inputForm" placeholder='Amount' onChange={handleChange}/>
            <label htmlFor="remark" className="tag">Remark</label>
            <input id='remark' type="text" className="inputForm" placeholder='Remark' onChange={handleChange}/>

            <br/>
            <div className="saveBeen">
            <label htmlFor="" className="tag">Save Beneficiary</label>
            <input id='saveBen' type="checkbox"  className="saveBenTick" placeholder='Remark' />
            </div>

            <button className="submit" onClick={handleClick}>Send</button>
            
        </form>
        
        </div>
        
        </div>
}

export default Transfer;