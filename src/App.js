import './Datas.css';
import { Provider } from "react-redux";
import Store from './redux/Store';
import SpotifyRoutes from "./routes/SpotifyRoutes";

function App() {
  return (
      <Provider store={Store}>
        <div className="">
          <SpotifyRoutes/>
        </div>
      </Provider>
  );
}

export default App;