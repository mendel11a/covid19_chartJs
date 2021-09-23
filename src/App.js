import logo from './logo.svg';
import './App.css';
import covid19 from './images/covid19.png';

function App() {


  return (
    <div className="grid-container">
      <header>
        <img className="image" src={covid19} />
      </header>
      <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>

    </div>
  );
}

export default App;
