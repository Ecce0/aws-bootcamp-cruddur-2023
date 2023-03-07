import './MessageGroupItem.css';
import { Link } from "react-router-dom";
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';

const MessageGroupItem = ({ messageGroup }) => {
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
    if (params.handle === messageGroup.handle){
      classes.push('active')
    }
    return classes.join(' ');
  }

  return (
    <Link className={classes()} to={`/messages/@`+messageGroup.handle}>
      <div className='message_group_avatar'></div>
      <div className='message_content'>
        <div classsName='message_group_meta'>
          <div className='message_group_identity'>
            <div className='display_name'>{messageGroup.display_name}</div>
            <div className="handle">@{messageGroup.handle}</div>
          </div>{/* activity_identity */}
        </div>{/* message_meta */}
        <div className="message">{messageGroup.message}</div>
        <div className="created_at" title={messageGroup.created_at}>
          <span className='ago'>{format_time_created_at(messageGroup.created_at)}</span> 
        </div>{/* created_at */}
      </div>{/* message_content */}
    </Link>
  );
}

export default MessageGroupItem