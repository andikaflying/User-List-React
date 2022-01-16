import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import {Helmet} from "react-helmet";
import './assets/fonts/icomoon/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';

function App() {
  return (
    <div className='App'>
      <div class="content">
        <MainPage />
      </div>
      <Helmet>
        <script src="/assets/js/jquery-3.3.1.min.js"  type="text/javascript" />
      </Helmet>
    </div>
  );
}

export default App;
