import React from 'react';
import SideNav from './components/SideNav';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  return (
    <div className="app">
      <SideNav />
      <ChatWindow />
    </div>
  );
}

export default App;
