import React from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpotifyGetPlaylist from "../GetPlaylist/SpotifyGetPlaylist.js";
import PlaylistSaved from "../PlaylistSearch/PlaylistSaved";
import useSearch from "../../hooks/useSearch";
import SearchForm from "../Search/SearchForm";
import { saveToken } from '../../redux/TokenAction';
import Button from '@mui/material/Button';
import './Index.css';

const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/create-playlist";
const SCOPE = "playlist-modify-private";
const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
const BASE_URL = `https://api.spotify.com/v1`;
const getToken = new URLSearchParams(window.location.hash).get("#access_token");

function Index() {
  const { searchResult, handleChange, onSearch } = useSearch();
  const [isSelected, setIsSelected] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
    viewPlaylist: [],
  });
  const [check, setCheck] = useState({
    emptyView: true,
    playlistId: "",
  });
  const access_token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  dispatch(saveToken(getToken));

  let userId = "";
  let playlistId = "";
  let newPlaylistId = "";

  const handleSelected = (uri) => {
    setIsSelected((oldArray) => oldArray.filter((id) => id !== uri));
    console.log(`Present id = ${isSelected}`);
  };

  const handleNotSelected = (uri) => {
    setIsSelected((oldArray) => [...oldArray, uri]);
    console.log(`Present id = ${isSelected}`);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    setNewPlaylist({ ...newPlaylist, [name]: value });
  };

  const handlePlaylist = async (event) => {
    event.preventDefault();
    if (access_token === null) {
      alert("Login first");
    } else if (isSelected.length === 0) {
      alert("Select song first");
    } else {
      console.log(access_token);
      await getUserId();
      console.log("create playlist");
      await createPlaylist();
      newPlaylistId = playlistId.replace("spotify:playlist:", "");
      await addSongPlaylist();
      console.log(playlistId);
    }
  };

  const handleView = (event) => {
    event.preventDefault();
    newPlaylistId = check.playlistId.replace("spotify:playlist:", "");
    viewPlaylist();
    setCheck({
      emptyView: false,
    });
  };

  const getUserId = async () => {
    try {
      let user = await axios.get(`${BASE_URL}/me`, {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
        },
      });
      console.log(user.data.id);
      userId = user.data.id;
    } catch (error) {
      console.log(error);
    }
  };

  const createPlaylist = async () => {
    try {
      let create = await axios.post(
        `${BASE_URL}/users/${userId}/playlists`,
        {
          name: newPlaylist.title,
          description: newPlaylist.description,
          public: false,
          collaborative: false,
        },
        {
          headers: {
            Authorization: "Bearer " + access_token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(create.data);
      playlistId = create.data.uri;
      setCheck({
        playlistId: create.data.uri,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addSongPlaylist = async () => {
    try {
      await axios.post(
        `${BASE_URL}/playlists/${newPlaylistId}/tracks`,
        {
          uris: isSelected,
          position: 0,
        },
        {
          headers: {
            Authorization: "Bearer " + access_token,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const viewPlaylist = async () => {
    try {
      let view = await axios.get(`${BASE_URL}/playlists/${newPlaylistId}`, {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
        },
      });
      console.log(view.data);
      setNewPlaylist({
        viewPlaylist: view.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedOut = () => {
    localStorage.removeItem("isLoggedIn");
    window.location = "http://localhost:3000/";
  };

  return (
    <div className="">
      <div className="buttonLogout">
        <Button variant="outlined" color="error" onClick={isLoggedOut}>Logout</Button>
      </div>
      <div className="">
        <div className="">
          <PlaylistSaved
            onCreate={handlePlaylist}
            handleChangeTitle={handleForm}
            handleChangeDesc={handleForm}
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <SearchForm onSearch={onSearch} handleChange={handleChange} />
          <div className="">
            {searchResult.map((item, index) => (
              <SpotifyGetPlaylist
                url={item.album.images[0].url}
                albumName={item.album.name}
                artistName={item.artists[0].name}
                alt=""
                key={item.uri}
                isSelected={isSelected.includes(item.uri)}
                onClick={(isSelected) =>
                  isSelected
                    ? handleSelected(item.uri)
                    : handleNotSelected(item.uri)
                }
                nameOfButton={
                  isSelected.includes(item.uri) ? "Deselect" : "Select"
                }
              />
            ))}
          </div>
        </div>
        <div className="">
          <p></p>
          <div className="">
            <p>{newPlaylist?.viewPlaylist.name}</p>
            {check.emptyView ? (
              <p></p>
            ) : (
              newPlaylist?.viewPlaylist?.tracks?.items?.map((item) => {
                return (
                  <SpotifyGetPlaylist
                    url={item.track.album.images[0].url}
                    alt=""
                    albumName={item.track.album.name}
                    artistName={item.track.artists[0].name}
                    key={item.track.uri}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;