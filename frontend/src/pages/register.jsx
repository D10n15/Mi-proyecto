// frontend/src/pages/Register.jsx
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      setMensaje('Usuario registrado con éxito');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setMensaje('Error al registrar usuario');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="username" placeholder="Nombre de usuario" value={formData.username} onChange={handleChange}
        />
        <input
          type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange}
        />
        <input
          type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange}
        />
        <input
          type="password" name="confirmPassword" placeholder="Confirmar contraseña" value={formData.confirmPassword} onChange={handleChange}
        />
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Register;

