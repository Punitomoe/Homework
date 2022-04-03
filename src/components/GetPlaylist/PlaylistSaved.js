const PlaylistSaved = () => {
  return (
      <>
        <div className="databorderPlaylist">
            <h1>Create <span>Playlist</span></h1>
            <form>
                <p className="">Title</p>
                <input type="text"  className=""></input>
                <div>
                <p className="">Description</p>
                <textarea  className=""></textarea>
                </div>
            </form>
            <button className="">Save</button>  
        </div>
      </>
  )
}
export default PlaylistSaved;