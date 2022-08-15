import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faPaperPlane,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jeffsum from 'jeffsum';
import './conversationDetail.css';

export default function ConversationDetail() {
  const { user } = useAuth0();
  const { id } = useParams();
  const navigate = useNavigate();
  const [convo, setConvo] = useState();
  const [body, setBody] = useState('');
  let jeffText = jeffsum(3, 'sentences');

  useEffect(() => {
    async function getConvo() {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${id}`);
      const data = await response.json();
      setConvo(data);
    }
    getConvo();
  }, [convo, id]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/edit?ticketId=${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: user.name,
            body: body,
          }),
        }
      );
      if (res.status === 200) {
        setBody('');
        await fetch(`${process.env.REACT_APP_BASE_URL}/edit?ticketId=${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'Jeff Goldblum',
            body: jeffText,
          }),
        });
        setBody('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  let handleSubmitDelete = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/delete?ticketId=${convo._id}`, {
      method: 'DELETE',
    });
    navigate('/')
  };

  if (convo) {
    return (
      <div className="conversation-detail-box">
        <div className="conversation-detail-header">
          <div className="conversation-detail-user">
            <h1>{convo.from}</h1>
          </div>
          <div className="conversation-detail-subject">
            <span>{convo.body}</span>
          
          {user.name === 'Admin' ? (
            <span>
              <form onSubmit={handleSubmitDelete}>
              <button type='submit'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              </form>
            </span>
          ) : (
            <></>
          )}
          </div>
        </div>

        <hr />

        <div className="conversation-detail-comments-box">
          {convo.comments.map((e) => {
            return (
              <div className="conversation-detail-comments-card" key={e._id}>
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

        <form onSubmit={handleSubmit}>
          <div className="conversation-detail-comment-add">
            <div className="conversation-detail-comment-add-textarea">
              <h3>Add Comment</h3>
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="conversation-detail-comment-add-icon">
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return <h1>Loading..</h1>;
  }
}
