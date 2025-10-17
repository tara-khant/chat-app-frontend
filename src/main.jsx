import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'antd/dist/reset.css';
import { UserProvider } from './context/UserContext';
import { MessageProvider } from './context/MessageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </React.StrictMode>
);
