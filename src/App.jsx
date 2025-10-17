import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored) setUser(stored);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute user={user}>
                <Chat user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to={user ? '/chat' : '/login'} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
