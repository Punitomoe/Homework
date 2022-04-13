import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './GetPlaylist.css';

function SpotifyGetPlaylist(props) {
  const [isSelected, setIsSelected] = useState(false);
  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
  }
  return (
    <div className="footer">
      <div>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.url}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.artistName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.albumName}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="buttonSelect">
        <Button variant="contained" component="span" type="button" className={`${isSelected ? "btn-primary" : "btn-secondary"}`} onClick={handleToggleSelect}>{isSelected ? "Deselect" : "Select"}</Button>
        </div>
      </CardActions>
    </Card>
    </div>
    {/* <div className="footer">
    <ul className="databorder">
      <img src={props.url} className="datalogo" alt={props.alt}></img>
      <div className="datatext2">
        <p className="album">{props.albumName}</p>
        <p>{props.artistName}</p>

        <button type="button" className={`${isSelected ? "btn-primary" : "btn-secondary"}`} onClick={handleToggleSelect}>{isSelected ? "Deselect" : "Select"}</button>
        
      </div>
    </ul>
    </div> */}

    </div>
  );
}

export default SpotifyGetPlaylist;