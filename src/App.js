//import logo from './logo.svg';
//import './App.css';
//import Index from './pages/home/Index';
import Data from './Data';
import './Datas.css';

function Datas() {
  console.log(Data);
  return (
  <header>
    <center>
    <div className="databorder">
    <img src={Data.album.images[0].url} className="datalogo" alt='' />
      <div className='datatext'>
          <p>{Data.album.name}</p>
          <p>{Data.album.artists[0].name}</p>
      </div>
      <button type="button" className='btn'>Tambah Playlist</button>
    </div>
    </center>
  </header>
  );
}

export default Datas;