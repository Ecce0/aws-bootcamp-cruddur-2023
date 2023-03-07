import './TrendingsSection.css';
import TrendItem from '../components/TrendItem';

const TrendingsSection = ({trendings}) => {
  return (
    <div className="trendings">
      <div className='trendings-title'>
        Trending
      </div>
      {trendings.map(trending => {
        return <TrendItem key={trending.hashtag} hashtag={trending.hashtag} count={trending.count} />
      })}
    </div>
  );
}

export default TrendingsSection