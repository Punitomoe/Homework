import './App.css';
import { Provider } from "react-redux";
import Store from './redux/Store';
import SpotifyRoutes from "./routes/SpotifyRoutes";
import Container from '@mui/material/Container';

function App() {
  return (
    <Container className="container" maxWidth="">
      <Provider store={Store}>
        <div className="">
          <SpotifyRoutes/>
        </div>
      </Provider>
    </Container>
  );
}

export default App;