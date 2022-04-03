import { useState } from "react";

function SpotifyGetPlaylist(props) {
  const [isSelected, setIsSelected] = useState(false);
  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
  }
  return (
    <div className="databorder">
      <img src={props.url} className="datalogo" alt={props.alt}></img>
      <div className="datatext2">
        <p className="album">{props.albumName}</p>
        <p>{props.artistName}</p>

        <button type="button" className={`${isSelected ? "btn-primary" : "btn-secondary"}`} onClick={handleToggleSelect}>{isSelected ? "Deselect" : "Select"}</button>
        
      </div>
    </div>
  );
}

export default SpotifyGetPlaylist;