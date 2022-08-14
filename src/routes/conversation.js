import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './conversation.css';

export default function Conversation() {
  return (
    <div className="conversation-box">
      <div className="header">
        <h2>Conversation List</h2>
      </div>

      <hr />

      <div className="conversation-list">
        <div className="conversation-list-card">
          <div className="conversation-list-user">
            <span>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <span>Jeff Goldblum</span>
          </div>

          <div className="conversation-list-subject">
            <Link to="/conversation/detail">
              <span>My stuff is on fire man!</span>
            </Link>
          </div>

          <div className="conversation-list-icon">
            <Link to="/conversation/detail">
              <span>
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
            </Link>
          </div>
        </div>

        <div className="conversation-list-card">
          <div className="conversation-list-user">
            <span>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <span>Jeff Goldblum</span>
          </div>

          <div className="conversation-list-subject">
            <Link to="/conversation/detail">
              <span>My stuff is on fire man!</span>
            </Link>
          </div>

          <div className="conversation-list-icon">
            <Link to="/conversation/detail">
              <span>
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
