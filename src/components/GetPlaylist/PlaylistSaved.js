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
            <button>Save</button>  
        </div>
      </>
  )
}
export default PlaylistSaved;