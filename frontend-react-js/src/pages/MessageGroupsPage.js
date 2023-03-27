import './MessageGroupsPage.css';
import React, { useState, useEffect, useRef } from "react";
import DesktopNavigation  from '../components/DesktopNavigation';
import MessageGroupFeed from '../components/MessageGroupFeed';
import checkAuth from '../lib/CheckAuth'

const MessageGroupsPage = () => {
  const [messageGroups, setMessageGroups] = useState([]);
  const [popped, setPopped] = useState([]);
  const [user, setUser] = useState(null);
  const dataFetchedRef = useRef(false);

  //remember to remove the next line, putting a console.log to remove errors in docker logs
  console.log(popped)

  const loadData = async () => {
    try {
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/message_groups`
      const res = await fetch(backend_url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        },
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessageGroups(resJson)
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  };  

  
  useEffect(()=>{
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    loadData();
    checkAuth(setUser);
  }, [])

  
  return (
    <article>
      <DesktopNavigation user={user} active={'home'} setPopped={setPopped} />
      <section className='message_groups'>
        <MessageGroupFeed groups={messageGroups} />
      </section>
      <div className='content'>
      </div>
    </article>
  );
}
export default MessageGroupsPage