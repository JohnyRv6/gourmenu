import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreProvider from './store/storeProvider';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router >
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
