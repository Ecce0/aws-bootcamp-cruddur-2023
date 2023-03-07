import './ProfileInfo.css';
import {ReactComponent as ElipsesIcon} from './svg/elipses.svg';
import React, { useState } from "react";
import { Auth } from 'aws-amplify';

// [TODO] Authenication
import Cookies from 'js-cookie'

const ProfileInfo = ({user}) => {
  const [popped, setPopped] = useState(false);

  const click_pop = (event) => {
    setPopped(!popped)
  }

  const signOut = async () => {
    try {
        await Auth.signOut({ global: true });
        window.location.href = "/"
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  
  const classes = () => {
    let classes = ["profile-info-wrapper"];
    if (popped === true){
      classes.push('popped');
    }
    return classes.join(' ');
  }

  return (
    <div className={classes()}>
      <div className="profile-dialog">
        <button onClick={signOut}>Sign Out</button> 
      </div>
      <div className="profile-info" onClick={click_pop}>
        <div className="profile-avatar"></div>
        <div className="profile-desc">
          <div className="profile-display-name">{user.display_name || "My Name" }</div>
          <div className="profile-username">@{user.handle || "handle"}</div>
        </div>
        <ElipsesIcon className='icon' />
      </div>
    </div>
  )
}

export default ProfileInfo