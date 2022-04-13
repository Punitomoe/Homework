import Button from '@mui/material/Button';
import './Search.css';

const SearchForm = ({ onSearch, handleChange, handlePlaylist }) => {
  return (
    <div>
      <div className='distanceSearch'></div>
        <form onSubmit={onSearch}>
          <input className="formInput" type="text" id="inpuText" onChange={handleChange} required/>
          <Button variant="contained" type="submit" value="submit">
            Search
          </Button>
          <div className='distanceSearch'></div>
        </form>
    </div>
  );
};

export default SearchForm;