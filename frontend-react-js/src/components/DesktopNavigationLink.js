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

  // const icon = ()=> {
  //   switch(handle){
  //     case 'notifications':
  //       return <NotificationsIcon className='icon' />
  //       break;
  //     case 'profile':
  //       return <ProfileIcon className='icon' />
  //       break;
  //     case 'more':
  //       return <MoreIcon className='icon' />
  //       break;
  //     case 'messages':
  //       return <MessagesIcon className='icon' />
  //       break;
  //     default:
  //       return <HomeIcon className='icon' />
  //   }
  // }

  if(handle === 'home'){
    return <HomeIcon className='icon' />
  } else if (handle === 'notifications'){
    return <NotificationsIcon className='icon' />
  } else if (handle === 'profile'){
    return <ProfileIcon className='icon' />
  } else if (handle === 'more'){
    return <MoreIcon className='icon' />
  } else if (handle === 'messages'){
    return <MessagesIcon className='icon' />
  }

  return (
    <Link to={url} className={classes()} href="/#">
      {handle}
      <span>{name}</span>
    </Link>
  );
}

export default DesktopNavigationLink