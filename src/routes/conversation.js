import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faUserCircle,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import './conversation.css';

export default function Conversation() {
  const [convoList, setConvoList] = useState([]);
  const [msgTo, setMsgTo] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const { user } = useAuth0();

  useEffect(() => {
    async function getConvos() {
      const response = await fetch('http://localhost:8000/tickets');
      const data = await response.json();
      setConvoList(data);
    }
    getConvos();
  }, []);

  let handleSubmit = async (e) => {
    try {
      let res = await fetch(`http://localhost:8000/tickets/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: msgTo,
          from: user.name,
          body: msgBody,
          status: 'New',
        }),
      });
      if (res.status === 200) {
        setMsgTo('');
        setMsgBody('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (convoList) {
    return (
      <div className="conversation-box">
        <div className="header">
          <h2>Conversation List</h2>
          <Popup trigger={<FontAwesomeIcon icon={faPlusSquare} />} modal>
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> New Ticket </div>
                <div className="content">
                  <form onSubmit={handleSubmit}>
                    To:{' '}
                    <input
                      type="text"
                      value={msgTo}
                      onChange={(e) => setMsgTo(e.target.value)}
                      required
                    />
                    Message Body:{' '}
                    <input
                      type="text"
                      value={msgBody}
                      onChange={(e) => setMsgBody(e.target.value)}
                      required
                    />
                    <input type="submit" />
                  </form>
                </div>
              </div>
            )}
          </Popup>
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
  } else {
    return <h1>Loading..</h1>;
  }
}
