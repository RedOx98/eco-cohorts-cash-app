import './navbar.scss';
import {Link} from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbar'>
            <Link className="list" to='/'><p className="logo">ecoLove</p>/</Link>
            <ul className="lists">
                <Link to='/'><li className="list">Home</li>
                </Link>
                <li className="list">Customer Care</li>
                <li className="list">About</li>
            </ul>
        </div>
    )
}

export default Topbar;