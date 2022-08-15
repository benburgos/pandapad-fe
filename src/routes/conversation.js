import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faUserCircle,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import './conversation.css';

export default function Conversation() {
  const [convoList, setConvoList] = useState([]);

  useEffect(() => {
    async function getConvos() {
      const response = await fetch('http://localhost:8000/tickets');
      const data = await response.json();
      setConvoList(data);
    }
    getConvos();
  }, []);

  return (
    <div className="conversation-box">
      <div className="header">
        <h2>Conversation List</h2>
        <FontAwesomeIcon icon={faPlusSquare} />
      </div>

      <hr />

      <div className="conversation-list">
        {convoList.map((convo, index) => {
          return (
            <div className="conversation-list-card" key={index}>
              <div className="conversation-list-user">
                <span>
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <span>{convo.from}</span>
              </div>

              <div className="conversation-list-subject">
                <Link to={`/conversation/detail/${convo._id}`}>
                  <span>{convo.body}</span>
                </Link>
              </div>

              <div className="conversation-list-icon">
                <Link to={`/conversation/detail/${convo._id}`}>
                  <span>
                    <FontAwesomeIcon icon={faCommentDots} />
                  </span>
                </Link>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
