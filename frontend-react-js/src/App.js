import './App.css';
import HomeFeedPage from './pages/HomeFeedPage';
import NotificationsFeedPage from './pages/NotificationsFeedPage';
import UserFeedPage from './pages/UserFeedPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import RecoverPage from './pages/RecoverPage';
import MessageGroupsPage from './pages/MessageGroupsPage';
import MessageGroupPage from './pages/MessageGroupPage';
import ConfirmationPage from './pages/ConfirmationPage';
import MessageGroupNewPage from './pages/MessageGroupNewPage'
import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

console.log('Auth', Auth)
console.log('Amplify', Amplify)

Amplify.configure({
  "AWS_PROJECT_REGION": process.env.REACT_APP_AWS_PROJECT_REGION,
  "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_CLIENT_ID,
  "oauth": {},
  Auth: {
    // We are not using an Identity Pool
    // identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID, // REQUIRED - Amazon Cognito Identity Pool ID
    region: process.env.REACT_APP_AWS_PROJECT_REGION,           // REQUIRED - Amazon Cognito Region
    userPoolId: process.env.REACT_APP_AWS_USER_POOLS_ID,         // OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,   // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  }
});


const App = () => {
 return (
  <Router>
    <Routes>
      <Route path='/' element={<HomeFeedPage />} />
      <Route path='/notifications' element={<NotificationsFeedPage />} />
      <Route path="/@:handle" element={<UserFeedPage />} />
      <Route path='/messages' element={<MessageGroupsPage />} />
      <Route path='/messages/new/:handle' element={<MessageGroupNewPage />} />
      <Route path='/messages/:message_group_uuid' element={<MessageGroupPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/confirm' element={<ConfirmationPage />} />
      <Route path='/forgot' element={<RecoverPage />} />
     </Routes>
  </Router>
 )
}

export default App;