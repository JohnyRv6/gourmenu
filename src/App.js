import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body-container">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
