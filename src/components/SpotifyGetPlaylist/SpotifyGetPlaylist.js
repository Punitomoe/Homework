import { useState } from "react";

// const switchItem() {
//   const [item, setItem] = useState()
// }

function SpotifyGetPlaylist(props) {
  const[Selected, setSelected] = useState("Selected");
  const[Delected, setDelected] = useState("Deselected");
  const handleSelected = () => {
    setSelected(Selected);
    console.log("Selected");
  };
  const handleDeselected = () => {
    setDelected(Delected);
    console.log("Delected");
  };
  return (
    <div className="databorder">
      <img src={props.url} className="datalogo" alt={props.alt}></img>
      <div className="datatext2">
        <p className="album">{props.albumName}</p>
        <p>{props.artistName}</p>

        <button type="button" onClick={handleSelected}>Selected</button>
        <button type="button" onClick={handleDeselected}>Deseleted</button>

      </div>
    </div>
  );
}

export default SpotifyGetPlaylist;