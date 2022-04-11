import React from "react";
import Index from './Index';
import PlaylistSaved from "./GetPlaylist/PlaylistSaved";

const BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = "63ff8c4fd4b34615887c6c18097c625f";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000/"
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-modify-private"]
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

/* 
http://localhost:3000/#access_token=BQCfF_txYNDkTBYdTbdrhfmGQZdzaaFoclM-6vON7XVQdIPNJv1ZJeLpV8V6u8V1L4gbdsKDnwWUPPQ797WSGFhiCVo4zAuUDjotHzmGskgfvmV91jO3byxNKieIBDZ_1R6w_HchevPz8DKtka8jeX7XG15h-LKzhPEQ6CQvPcTBdcd0GeeyFFsL0pEnokxd_EQ&token_type=Bearer&expires_in=3600 
*/
const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHastag = hash.substring(1);
    const paramsInUrl = stringAfterHastag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});
    return paramsSplitUp;
}

const Spotify = () => {
    if (window.location.hash) {
        const {
            access_token,
            expires_in,
            token_type,
        } = getReturnedParamsFromSpotifyAuth(window.location.hash);
        
        localStorage.clear();
        localStorage.setItem("AccessToken", access_token);
        localStorage.setItem("ExpiresIn", expires_in);
        localStorage.setItem("TokenType", token_type);
    }
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
    return (
        <center>
        <div>
            <h1 className="datatext">Spotify</h1>
            <button onClick={handleLogin}>Login to Spotify</button>
            <Index/>
        </div>
        </center>
    );
};

export default Spotify;