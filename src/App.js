import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="welcome-message">Estás invitado a mi fiesta</h1>
        <div className="video-container">
          <video className="full-screen-video" controls>
            <source src={`${process.env.PUBLIC_URL}/birthday.mp4`} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </header>
    </div>
  );
}

export default App;