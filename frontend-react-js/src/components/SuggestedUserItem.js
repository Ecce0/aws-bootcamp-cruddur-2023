import './SuggestedUserItem.css';

const SugestedUserItem = ({display_name, handle}) => {
  return (
    <div className="user">
      <div className='avatar'></div>
      <div className='identity'>
        <span className="display_name">{display_name}</span>
        <span className="handle">@{handle}</span>
      </div>
    </div>
  );
}

export default SugestedUserItem