import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainBody from './Components/MainBody/MainBody';

function App() {
  return (
    <div className='powerX'>
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
