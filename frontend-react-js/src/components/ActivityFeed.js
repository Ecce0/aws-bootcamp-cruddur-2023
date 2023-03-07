import './ActivityFeed.css';
import ActivityItem from './ActivityItem';

const ActivityFeed = ({ title, activities }) => {
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