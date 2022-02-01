import '../styles/App.css';
import Footer from './Footer';
import Header from './Header';
import Results from './Results';
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
