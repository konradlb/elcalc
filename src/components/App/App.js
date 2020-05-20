import React from 'react';
import './App.scss';
import Menu from '../Menu/Menu';
import DcForm from '../DcForm/DcForm';
import Header from '../Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <DcForm/>
    </div>
  );
}


