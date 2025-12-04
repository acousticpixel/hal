import React, { useState } from 'react';
import './SideNav.css';

const SideNav = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [chats] = useState([
    { id: 0, title: 'New Chat', timestamp: 'Just now' },
    { id: 1, title: 'Previous Conversation', timestamp: '2 hours ago' },
    { id: 2, title: 'Project Discussion', timestamp: 'Yesterday' },
  ]);

  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <img src="/logo.svg" alt="HAL Logo" className="logo" />
        <h1 className="app-title">HAL</h1>
      </div>

      <button className="new-chat-btn">
        <span className="plus-icon">+</span>
        New Chat
      </button>

      <div className="chat-list">
        <h3 className="chat-list-title">Recent Chats</h3>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
            onClick={() => setActiveChat(chat.id)}
          >
            <div className="chat-item-title">{chat.title}</div>
            <div className="chat-item-timestamp">{chat.timestamp}</div>
          </div>
        ))}
      </div>

      <div className="sidenav-footer">
        <div className="user-section">
          <div className="user-avatar">U</div>
          <div className="user-info">
            <div className="user-name">User</div>
            <div className="user-status">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
