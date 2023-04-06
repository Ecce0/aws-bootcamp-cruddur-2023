import './MessageForm.css';
import React, { useState } from "react";
import process from 'process';
import { useParams } from 'react-router-dom';

const MessageForm = ({ setMessages }) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const params = useParams();

  const classes = []
  classes.push('count')
  if (1024-count < 0){
    classes.push('err')
  }

  const onsubmit = async (event) => {
    event.preventDefault();
    try {
      let json = { message }
      if (params.handle) {
        json.handle = params.handle
      } else {
        json.message_group_uuid = params.message_group_uuid
      }      
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/messages`
      console.log('onsubmit payload', message)
      const res = await fetch(backend_url, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'                   
        },
        body: JSON.stringify(json),
      });
      let data = await res.json();
      if (res.status === 200) {
        console.log('data', data)
        if (data.message_group_uuid) {
          console.log('redirect to message group')
          window.location.href = `/message/${data.message_group_uuid}`
        } else {
          setMessages(current => [...current, data])
        }
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

 

  const textarea_onchange = (event) => {
    setCount(event.target.value.length);
    setMessage(event.target.value);
  }

  return (
    <form 
      className='message_form'
      onSubmit={onsubmit}
    >
      <textarea
        type="text"
        placeholder="send a direct message..."
        value={message}
        onChange={textarea_onchange} 
      />
      <div className='submit'>
        <div className={classes.join(' ')}>{1024-count}</div>
        <button type='submit'>Message</button>
      </div>
    </form>
  );
}

export default MessageForm