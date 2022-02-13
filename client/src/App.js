import React from 'react';
import './App.css';
import Application from './components/Application';
import Footer from './styles/Footer';
import Header from './styles/Header';

function App() {
  return (
    <div className="App">
      {/* <div> <Header/> </div> */}
      <div><Application /> </div>
      {/* <div> <Footer/> </div>     */}
    </div>
  );
}

export default App;
