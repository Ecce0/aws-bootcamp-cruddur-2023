import './ActivityItem.css';
import ActivityContent  from '../components/ActivityContent';
import ActivityActionReply  from '../components/ActivityActionReply';
import ActivityActionRepost  from '../components/ActivityActionRepost';
import ActivityActionLike  from '../components/ActivityActionLike';
import ActivityActionShare  from '../components/ActivityActionShare';
import React, { useState } from 'react'

const ActivityItem = ({ activity }) => {
  const [ popped, setPopped ] = useState()
  const [replyActivity, setReplyActivity ] = useState()

  //remove these lines when its time to
  console.log(popped, replyActivity)

  let replies;
  if (activity.replies) {
    replies = <div className="replies">
                {activity.replies.map(reply => {
                return  <ActivityItem 
                  setReplyActivity={setReplyActivity} 
                  setPopped={setPopped} 
                  key={reply.uuid} 
                  activity={reply} 
                  />
                })}
              </div>
  }

  return (
    <div className='activity_item'>
      <ActivityContent activity={activity} />
      <div className="activity_actions">
        <ActivityActionReply setReplyActivity={setReplyActivity} activity={activity} setPopped={setPopped} activity_uuid={activity.uuid} count={activity.replies_count}/>
        <ActivityActionRepost activity_uuid={activity.uuid} count={activity.reposts_count}/>
        <ActivityActionLike activity_uuid={activity.uuid} count={activity.likes_count}/>
        <ActivityActionShare activity_uuid={activity.uuid} />
      </div>
      {replies}
    </div>
  );
}

export default ActivityItem