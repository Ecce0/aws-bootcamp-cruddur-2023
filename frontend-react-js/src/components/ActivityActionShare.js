import {ReactComponent as ShareIcon} from './svg/share.svg';

const ActivityActionRepost = () => { 
  const onclick = (event) => {
    console.log('trigger share')
  }

  return (
    <div onClick={onclick} className="action activity_action_share">
      <ShareIcon className='icon' />
    </div>
  )
}

export default ActivityActionRepost