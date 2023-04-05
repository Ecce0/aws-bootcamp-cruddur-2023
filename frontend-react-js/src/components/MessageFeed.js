import './MessageFeed.css';
import MessageItem from './MessageItem';

const MessageFeed = ({ messages = [] }) => {
  return (
    <div className='message_feed'>
      <div className='message_feed_heading'>
        <div className='title'>Thread</div>
      </div>
      <div className='message_feed_collection'>
        {messages.map(message => {
        return  <MessageItem key={message.uuid} message={message} />
        })}
      </div>
    </div>
  );
}

export default MessageFeed