import React from 'react'
import './MessageGroupFeed.css';
import MessageGroupItem from './MessageGroupItem';
import MessageGroupNewItem from './MessageGroupNewItem'

const MessageGroupFeed = ({ groups = [], otherUser }) => {  
  let message_group_new_item;

  if(otherUser){
    message_group_new_item = <MessageGroupNewItem user={otherUser} />
  }

  return (
    <div className='message_group_feed'>
      <div className='message_group_feed_heading'>
        <div className='title'>Messages</div>
      </div>
      <div className='message_group_feed_collection'>
        {message_group_new_item}
        {groups.map(group => {
        return  <MessageGroupItem key={group.uuid} message_group={group} />
        })}
      </div>
    </div>
  );
}

export default MessageGroupFeed