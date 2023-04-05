import './MessageGroupItem.css';
import { Link } from "react-router-dom";
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react'

const MessageGroupItem = ({ message_group }) => {
  
  const params = useParams();

  const format_time_created_at = (value) => {
    // format: 2050-11-20 18:32:47 +0000
    const created = DateTime.fromISO(value)
    const now     = DateTime.now()
    const diff_mins = now.diff(created, 'minutes').toObject().minutes;
    const diff_hours = now.diff(created, 'hours').toObject().hours;

    if (diff_hours > 24.0){
      return created.toFormat("LLL L");
    } else if (diff_hours < 24.0 && diff_hours > 1.0) {
      return `${Math.floor(diff_hours)}h`;
    } else if (diff_hours < 1.0) {
      return `${Math.round(diff_mins)}m`;
    }
  };

  const classes = () => {
    let classes = ["message_group_item"];
    if (params.message_group_uuid === message_group.uuid){
      classes.push('active')
    }
    return classes.join(' ');
  }
   

  return (
    <Link className={classes()} to={`/messages/`+message_group.uuid}>
      <div className='message_group_avatar'></div>
      <div className='message_content'>
        <div className='message_group_meta'>
          <div className='message_group_identity'>
            <div className='display_name'>{message_group.display_name}</div>
            <div className="handle">@{message_group.handle}</div>
          </div>{/* activity_identity */}
        </div>{/* message_meta */}
        <div className="message">{message_group.message}</div>
        <div className="created_at" title={message_group.created_at}>
          <span className='ago'>{format_time_created_at(message_group.created_at)}</span> 
        </div>{/* created_at */}
      </div>{/* message_content */}
    </Link>
  );
}

export default MessageGroupItem