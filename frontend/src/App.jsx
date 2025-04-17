// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Eliminar Navigate
import Register from './pages/register';
import Login from './pages/login';
import Feed from './pages/feed';
import PrivateRoute from './Components/PrivateRoute';
import './styles/buttons.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <h1>Bienvenido a dio@pperls</h1>
              <Link to="/register">
                <button className="btn">Ir a Registro</button>
              </Link>
              <Link to="/login">
                <button className="btn" style={{ marginLeft: '10px' }}>Iniciar Sesión</button>
              </Link>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida */}
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;





