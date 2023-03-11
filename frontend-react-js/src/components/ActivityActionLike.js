import {ReactComponent as HeartIcon} from './svg/heart.svg';


const ActivityActionLike = ({ count }) => { 
  const onclick = (event) => {
    console.log('toggle like/unlike')
  }

  let counter;
  if (count > 0) {
    counter = <div className="counter">{count}</div>;
  }

  return (
    <div onClick={onclick} className="action activity_action_heart">
      <HeartIcon className='icon' />
      {counter}
    </div>
  )
}

export default ActivityActionLike