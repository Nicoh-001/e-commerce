import React from 'react';
import './App.css'; 
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="pt-5">
          <Home />
     </div>
      <About/>
      <Footer/>
    </div>
  );
}
}
 

export default App;
