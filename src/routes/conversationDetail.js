import './conversationDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ConversationDetail() {
  const [convo, setConvo] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getConvo() {
      const response = await fetch(`http://localhost:8000/tickets/${id}`);
      const data = await response.json();
      setConvo(data);
    }
    getConvo();
  }, []);

  console.log(convo)

  if (convo) {
    return (
      <div className="conversation-detail-box">
        <div className="conversation-detail-header">
          <div className="conversation-detail-user">
            <h1>{convo.from}</h1>
          </div>
          <div className="conversation-detail-subject">
            <span>{convo.body}</span>
          </div>
        </div>

        <hr />

        <div className="conversation-detail-comments-box">
          {convo.comments.map((e) => {
            return (
              <div className="conversation-detail-comments-card">
                <div className="conversation-detail-user-icon">
                  <FontAwesomeIcon icon={faUserCircle} /> {e.from}
                </div>
                <div className="conversation-detail-comment-text">
                  <p>{e.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="conversation-detail-comment-add">
          <div className="conversation-detail-comment-add-textarea">
            <h3>Add Comment</h3>
            <input type="text"></input>
          </div>
          <div className="conversation-detail-comment-add-icon">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading..</h1>;
  }
}
