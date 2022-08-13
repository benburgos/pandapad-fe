import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faComment,
  faEnvelope,
  faPhone,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';
import './nav.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <img alt='pandapad-logo' src='https://www.freepnglogos.com/uploads/panda-png/panda-thomas-dafoe-studios-bare-bears-png-pack-3.png'/>
      <Link to='/unavailable'>
      <FontAwesomeIcon icon={faPhone} flip="horizontal" /> Talk
      </Link>
      <Link to='/unavailable'>
      <FontAwesomeIcon icon={faEnvelope} flip="horizontal" /> Mail
      </Link>
      <Link to='/'>
      <FontAwesomeIcon icon={faComment} flip="horizontal" /> Conversations
      </Link>
      <Link to='/unavailable'>
      <FontAwesomeIcon icon={faIdCard} flip="horizontal" /> Profile
      </Link>
      <Link to='/unavailable'>
      <FontAwesomeIcon icon={faSignInAlt} flip="horizontal" /> Logout
      </Link>
    </nav>
  );
}
