import { Auth } from 'aws-amplify';

export const getAccessToken = async () => {
  Auth.currentSession()  
  .then((cognito_user_session) => {
    const access_token = cognito_user_session.accessToken.jwtToken
    localStorage.setItem("access_token", access_token)
  })
  .catch((err) => console.log(err));
}

export const checkAuth = async (setUser) => {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    })
      .then((cognito_user) => {
        setUser({
          display_name: cognito_user.attributes.name,
          handle: cognito_user.attributes.preferred_username
        })
        return Auth.currentSession()        
      }).then((cognito_user_session) => {
        localStorage.setItem("access_token", cognito_user_session.accessToken.jwtToken)        
      })
      .catch((err) => console.log(err));
  };