// import Data from './Data'
// import Data from '../App';
import React, { useEffect } from "react";
import axios from "axios";
import SpotifyGetPlaylist from "./SpotifyGetPlaylist/SpotifyGetPlaylist";

const BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = "63ff8c4fd4b34615887c6c18097c625f";
const REDIRECT_URI = "http://localhost:3000/";
const SCOPE = ["playlist-modify-private"]
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      savedToken: "",
      searchQuery: "",
      searchResult: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.warn("didMount");
    const access_token = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );
    this.setState(
      {
        savedToken: access_token,
        isLoggedIn: true,
      },
      () => console.log(this.state.savedToken)
    );
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  onSearch(event) {
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${this.state.savedToken}`,
        },
        params: {
          q: `${this.state.searchQuery}`,
          type: "track",
        },
      })
      .then((response) => {
        const data = response.data.tracks.items;
        console.log(data);
        this.setState({
          searchResult: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  onSubmit(event) {
    const url = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
    window.location = url;
    event.preventDefault();
  }

  onClick(event) {
    this.setState({
      isLoggedIn: false,
      savedToken: "",
    });
    window.location.replace = "http://localhost:3000/";
  }

  render() {
    let element;
    if (this.state.isLoggedIn === true && this.state.savedToken != null) {
      element = (
        <form onSubmit={this.onSearch}>
          <input type="text" id="inpuText" onChange={this.handleChange} />
          <button type="submit" className="btn" value="submit">
            Search
          </button>
          {this.state.searchResult.map((item, index) => (
            <SpotifyGetPlaylist
              url={item.album.images[0].url}
              albumName={item.album.name}
              artistName={item.artists[0].name}
              alt="Image not loaded"
              key={index}
            />
          ))}
        </form>
      );
    } else
    document.onkeydown = function () {
      if (window.event.keyCode == "13") {
        this.onSearch();
      }
    };
    return (
      <div>
        {element}
      </div>
    );
  }
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