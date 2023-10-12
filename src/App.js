import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';

function App() {
  return (
    <>
      <h3 className="text-center my-4">Crud Application</h3>
      <Home />
    </>
  );
}

export default App;
