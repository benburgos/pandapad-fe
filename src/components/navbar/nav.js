import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faComment,
  faEnvelope,
  faPhone,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <>
      <Link to='/'>
      <FontAwesomeIcon icon={faPhone} flip="horizontal" />
      </Link>
      <Link to='/'>
      <FontAwesomeIcon icon={faEnvelope} flip="horizontal" />
      </Link>
      <Link to='/'>
      <FontAwesomeIcon icon={faComment} flip="horizontal" />
      </Link>
      <Link to='/'>
      <FontAwesomeIcon icon={faIdCard} flip="horizontal" />
      </Link>
      <Link to='/'>
      <FontAwesomeIcon icon={faSignInAlt} flip="horizontal" />
      </Link>
    </>
  );
}
