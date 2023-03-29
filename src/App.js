import './App.css';
// installare bootstrap e react-bootstrap non lo rende automaticamente disponibile
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyHome from './components/MyHome';
const App = () => {
  return (
    // JSX
    <div className="App">
      <MyNav className="position-fixed"></MyNav>
      <div class="mt-4 p-5 bg-secondary text-white rounded">
        <h1>I nostri libri</h1>
        <p>Ecco cosa abbiamo per te:</p>
      </div>
      <div className='d-flex'>
        <MyHome/>
      </div>
      <div>
        <MyFooter/>
      </div>
    </div>
  );
}

export default App;
