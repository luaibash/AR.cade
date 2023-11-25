import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <div className="game">
          <iframe title="Camera" className="App-game" src="https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/" scrolling="none" frameborder="0"></iframe>
        </div>
        <div className="App-video">
          <h3>Video Stream</h3>
          <img src={'/webcam'} alt="video stream" />
        </div>        
      </div>
    </div>
  );
}

export default App;
