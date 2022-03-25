import Data from './Data'
import Datas from '../App';

const MyComponents = props => {
    return (
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
    )
}

export default MyComponents;