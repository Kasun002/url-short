import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
