import {BrowserRouter as Router,Switch,Route,Link,Redirect,} from "react-router-dom";
import Index from "../components/Index";
import Spotify from "../components/Spotify";
  
function SpotifyRoutes() {
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log(isLoggedIn);
    return (
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {isLoggedIn ? (
              <Index />
            ) : (
              <Redirect exact from="/create-playlist" to="/" />
            )}
          </Route>
          <Route exact path="/">
            <Spotify/>
          </Route>
        </Switch>
      </Router>
    );
  }
  
  export default SpotifyRoutes;