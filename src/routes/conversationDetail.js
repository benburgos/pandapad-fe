import './conversationDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import jeffsum from 'jeffsum';

export default function ConversationDetail() {
  return (
    <div className="conversation-detail-box">
      <div className="conversation-detail-header">
        <div className="conversation-detail-user">
          <h1>Jeff Goldblum</h1>
        </div>
        <div className="conversation-detail-subject">
          <span>My stuff is on fire man!</span>
        </div>
      </div>

      <hr />

      <div className="conversation-detail-comments-box">
        {/* First Comment */}
        <div className="conversation-detail-comments-card">
          <div className="conversation-detail-user-icon">
            <FontAwesomeIcon icon={faUserCircle} /> Jeff Goldblum
          </div>
          <div className="conversation-detail-comment-text">
            <p>{jeffsum(4, 'sentences')}</p>
          </div>
        </div>
        {/* Second Comment */}
        <div className="conversation-detail-comments-card">
          <div className="conversation-detail-user-icon">
            <FontAwesomeIcon icon={faUserCircle} /> Agent
          </div>
          <div className="conversation-detail-comment-text">
            <p>{jeffsum(4, 'sentences')}</p>
          </div>
        </div>
        {/* Third Comment */}
        <div className="conversation-detail-comments-card">
          <div className="conversation-detail-user-icon">
            <FontAwesomeIcon icon={faUserCircle} /> Jeff Goldblum
          </div>
          <div className="conversation-detail-comment-text">
            <p>{jeffsum(4, 'sentences')}</p>
          </div>
        </div>
        {/* Fourth Comment */}
        <div className="conversation-detail-comments-card">
          <div className="conversation-detail-user-icon">
            <FontAwesomeIcon icon={faUserCircle} /> Agent
          </div>
          <div className="conversation-detail-comment-text">
            <p>{jeffsum(4, 'sentences')}</p>
          </div>
        </div>
      </div>

      <div className="conversation-detail-comment-add">
        <div className="conversation-detail-comment-add-textarea">
            <h3>Add Comment</h3>
          <input type='text'></input>
        </div>
        <div className="conversation-detail-comment-add-icon">
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
}
