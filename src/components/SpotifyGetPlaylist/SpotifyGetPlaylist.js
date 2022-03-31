function SpotifyGetPlaylist(props) {
  return (
    <div className="databorder">
      <img src={props.url} className="datalogo" alt={props.alt}></img>
      <div className="datatext2">
        <p className="album">{props.albumName}</p>
        <p>{props.artistName}</p>
        <button type="button">Tambah Playlist</button>
      </div>
    </div>
  );
}

export default SpotifyGetPlaylist;