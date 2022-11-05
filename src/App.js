import { RecoilRoot } from 'recoil'
import MainRoutes from './pages/MainRoutes/MainRoutes';
import Popup from './components/Popup';
import './App.css';

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <MainRoutes />
        <Popup />
      </div>
    </RecoilRoot>
  );
}

export default App;
