import './App.css';
import './lib/font-awesome/css/all.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add} from './components/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    // Routing
    <GlobalProvider>
      <Router>
        <Header>

        </Header>

        <Routes>

          <Route exact path='/' element={<Watchlist/>} />

          <Route exact path='/watched' element={<Watched/>} />

          <Route exact path='/add' element={<Add/>} />

        </Routes>
      </Router>
    </GlobalProvider>
  )
}

export default App;
