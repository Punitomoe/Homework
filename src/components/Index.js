// import Data from './Data'
// import Data from '../App';
import data from './DataBaru';

function Index() {
    return (
        <center>
        <div className="">
            {data.map((data, index) => {
                return (
                    <div key={index} className='databorder'>
                        <img src={data.album.images[0].url} className="datalogo" alt='' />
                        <p>{data.album.name}</p>
                        <p>{data.album.artists.name}</p>
                        <button type="button" className='btn'>Tambah Playlist</button>
                    </div>
                )
            })}
        </div>
        </center>
    )
}
export default Index;

// fuction MyComponents = props => {
//     return (
//         <center>
//         <div className="databorder">
//         <img src={Data.album.images[0].url} className="datalogo" alt='' />
//           <div className='datatext'>
//               <p>{Data.album.name}</p>
//               <p>{Data.album.artists[0].name}</p>
//           </div>
//           <button type="button" className='btn'>Tambah Playlist</button>
//         </div>
//         </center>
//     )
// }

// export default MyComponents;