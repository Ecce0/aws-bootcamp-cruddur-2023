import './MessageGroupPage.css';
import React, { useState, useRef, useEffect } from "react";
import { useParams } from 'react-router-dom';
import DesktopNavigation  from '../components/DesktopNavigation';
import MessageGroupFeed from '../components/MessageGroupFeed';
import MessageFeed from '../components/MessageFeed';
import MessageForm from '../components/MessageForm';
import { getAccessToken, checkAuth } from '../lib/CheckAuth'

const MessageGroupPage = () => {
  const [messageGroups, setMessageGroups] = useState([]);
  const [messages, setMessages] = useState([]);
  const [popped, setPopped] = useState([]);
  const [user, setUser] = useState(null);
  const dataFetchedRef = useRef(false);
  const params = useParams();


  const loadMessageGroupsData = async () => {
    try {
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/message_groups`
      await getAccessToken()
      const access_token = localStorage.getItem('access_token')
      const res = await fetch(backend_url, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessageGroups([...resJson])
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  };  

  const loadMessageGroupData = async () => {
    try {
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/messages/${params.message_group_uuid}`
      await getAccessToken()
      const access_token = localStorage.getItem('access_token')
      const res = await fetch(backend_url, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessages([...resJson])
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

    loadMessageGroupsData();
    loadMessageGroupData();
    checkAuth(setUser);
    // eslint-disable-next-line
  }, [])


  return (
    <article>
      <DesktopNavigation user={user} active={'home'} setPopped={setPopped} />
      <section className='message_groups'>
        <MessageGroupFeed groups={messageGroups} />
      </section>
      <div className='content messages'>
        <MessageFeed messages={messages} />
        <MessageForm setMessages={setMessages} />
      </div>
    </article>
  );
}

export default MessageGroupPage