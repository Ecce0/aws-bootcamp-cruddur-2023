import './SuggestedUserSection.css';
import SuggestedUserItem from '../components/SuggestedUserItem';

const SuggestedUsersSection = ({ users }) => {
  return (
    <div className="suggested_users">
      <div className='suggested_users_title'>
        Suggested Users
      </div>
      {users.map(user => {
        return <SuggestedUserItem key={user.handle} display_name={user.display_name} handle={user.handle} />
      })}
    </div>
  );
}

export default SuggestedUsersSection