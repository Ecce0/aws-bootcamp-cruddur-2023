import './CrudButton.css';

const CrudButton = () => {
  const pop_activities_form = (event) => {
    setPopped(true);
  }

  return (
    <button onClick={pop_activities_form} className='post' href="#">Crud</button>
  );
}

export default CrudButton