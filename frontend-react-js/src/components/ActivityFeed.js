import './ActivityFeed.css';
import ActivityItem from './ActivityItem';
import React, { useState } from 'react'

const ActivityFeed = ({ title, activities }) => {
   const [ popped, setPopped ] = useState()
   const [ replyActivity, setReplyActivity ] = useState()

    //remove these lines when its time to
  console.log(popped, replyActivity)

  return (
    <div className='activity_feed'>
      <div className='activity_feed_heading'>
        <div className='title'>{title}</div>
      </div>
      <div className='activity_feed_collection'>
        {activities.map(activity => {
        return  <ActivityItem setReplyActivity={setReplyActivity} setPopped={setPopped} key={activity.uuid} activity={activity} />
        })}
      </div>
    </div>
  );
}

export default ActivityFeed