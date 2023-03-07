import {ReactComponent as ReplyIcon} from './svg/reply.svg';

const ActivityActionReply = ({ activity, count }) => { 
  const onclick = (event) => {
    setReplyActivity(activity)
    setPopped(true)
  }

  let counter;
  if (count > 0) {
    counter = <div className="counter">{count}</div>;
  }

  return (
    <div onClick={onclick} className="action activity_action_reply">
      <ReplyIcon className='icon' />
      {counter}
    </div>
  )
}

export default ActivityActionReply