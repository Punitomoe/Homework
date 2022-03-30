import React, {useEffect, useState} from "react";
import axios from "axios";

const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/search";

const SpotifyGetPlaylist = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

useEffect(() => {
    if (localStorage.getItem("accessToken")){
        setToken(localStorage.getItem("accessToken"));
    }
}, []);

const handleGetPlaylist = () => {
    axios.get(PLAYLIST_ENDPOINT, {
        headers: {
            Authorization: "Bearer" + token,
        },
    })
    .then((response) => {
        setData(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
}

    return <button onClick={handleGetPlaylist}>Search</button>;
    
};

export default SpotifyGetPlaylist;