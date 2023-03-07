import { Link } from "react-router-dom";
import {ReactComponent as HomeIcon} from './svg/home.svg';
import {ReactComponent as NotificationsIcon} from './svg/notifications.svg';
import {ReactComponent as ProfileIcon} from './svg/profile.svg';
import {ReactComponent as MoreIcon} from './svg/more.svg';
import {ReactComponent as MessagesIcon} from './svg/messages.svg';

const DesktopNavigationLink = ({ handle, active, url, name }) => {
  const classes = ()=> {
    const classes = ['primary']
    if (handle === active) {
      classes.push('active')
    }
    return classes.join(' ')
  }

  const icon = ()=> {
    switch(handle){
      case 'home':
        return <HomeIcon className='icon' />
        break;
      case 'notifications':
        return <NotificationsIcon className='icon' />
        break;
      case 'profile':
        return <ProfileIcon className='icon' />
        break;
      case 'more':
        return <MoreIcon className='icon' />
        break;
      case 'messages':
        return <MessagesIcon className='icon' />
        break;
    }
  }

  return (
    <Link to={url} className={classes()} href="#">
      {icon()}
      <span>{name}</span>
    </Link>
  );
}

export default DesktopNavigationLink