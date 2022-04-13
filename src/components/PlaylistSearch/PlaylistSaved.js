import './PlaylistSearch.css';
import Button from '@mui/material/Button';

const PlaylistSaved = ({
    onCreate,
    handleChange,
    handleChangeDesc,
    handleChangeTitle,
  }) => {
  
  return (
      <>
        <div className="databorderPlaylist">
            <h1>Create <span>Playlist</span></h1>
            <form onSubmit={onCreate}>
                <p>Title</p>
                <input type="text" id="title" onChange={handleChangeTitle} minLength={10} required className=""></input>
                <div>
                <p>Description</p>
                <textarea type="text" id="description" name="description" onChange={handleChangeDesc} required></textarea>
                </div>
            </form>
            <div className="buttonSave">
            <Button variant="contained">Save</Button>
            </div>
        </div>
      </>
  )
}
export default PlaylistSaved;