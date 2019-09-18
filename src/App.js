import React from 'react';
import './App.css';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu One
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">SubMenu One</a>
          <a class="dropdown-item" href="#">SubMenu Two</a>
          <a class="dropdown-item" href="#">SubMenu Three</a>
          
          <a class="dropdown-item" href="#">RFT Pulse</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Menu Two <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Menu Three <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Menu Four <span class="sr-only">(current)</span></a>
      </li>
       
    </ul>
  </div>
</nav>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
