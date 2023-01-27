import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import MainRoutes from './config/routes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <HomePage></HomePage> */}
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
