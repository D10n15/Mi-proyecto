// frontend/src/pages/feed.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Feed() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // obtenemos el nombre

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar token
    localStorage.removeItem('username'); //nombre de perfil
    navigate('/login'); // Redirigir al login
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}} >
      <h2>Bienvenido al Feed</h2>
      <p>¡Hola, {username}! Estás autenticado 🎉</p>
  
      <button className="btn" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}
  

export default Feed;

  