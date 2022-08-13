import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots
} from '@fortawesome/free-solid-svg-icons';
import './conversation.css';

export default function Conversation() {
  return (
    <div className="conversation-box">
      <div className="header">
        <h2>Conversation List</h2>
      </div>

      <hr />

      <div className="conversation-list">
        <div className='conversation-list-card'>
            <ul>
            <div className="conversation-list-user">
                <li>Icon</li>
                <li>Name</li>
            </div>

            <div className="conversation-list-comment">
                <Link to='/unavailable'>
                    <li>My stuff is on fire man!</li>
                    <li><FontAwesomeIcon icon={faCommentDots} /></li>
                </Link>
            </div>
            </ul>
        </div>
        <div className='conversation-list-card'>
            <ul>
            <div className="conversation-list-user">
                <li>Icon</li>
                <li>Name</li>
            </div>

            <div className="conversation-list-comment">
                <Link to='/unavailable'>
                    <li>My stuff is on fire man!</li>
                    <li><FontAwesomeIcon icon={faCommentDots} /></li>
                </Link>
            </div>
            </ul>
        </div>
      </div>

    </div>
  );
}
