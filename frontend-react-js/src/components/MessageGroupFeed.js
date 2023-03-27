import React, { useState } from 'react'
import './MessageGroupFeed.css';
import MessageGroupItem from './MessageGroupItem';

const MessageGroupFeed = ({ groups = [] }) => {  


  return (
    <div className='message_group_feed'>
      <div className='message_group_feed_heading'>
        <div className='title'>Messages</div>
      </div>
      <div className='message_group_feed_collection'>
        {groups.map(group => {
        return  <MessageGroupItem key={group.uuid} message_group={group} />
        })}
      </div>
    </div>
  );
}

export default MessageGroupFeed