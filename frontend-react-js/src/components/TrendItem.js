import './TrendItem.css';

const TrendItem = ({ hashtag, count }) => {
  const commify = (n) => {
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
  }

  return (
    <a className="trending" href="/#">
      <span className="hashtag">#{hashtag}</span>
      <span className="count">#{commify(count)} cruds</span>
    </a>
  );
}

export default TrendItem