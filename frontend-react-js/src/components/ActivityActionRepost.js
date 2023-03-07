import {ReactComponent as RepostIcon} from './svg/repost.svg';

const ActivityActionRepost = ({ count }) => { 
  const onclick = (event) => {
    console.log('trigger repost')
  }

  let counter;
  if (count > 0) {
    counter = <div className="counter">{count}</div>;
  }

  return (
    <div onClick={onclick} className="action activity_action_repost">
      <RepostIcon className='icon' />
      {counter}
    </div>
  )
}

export default ActivityActionRepost