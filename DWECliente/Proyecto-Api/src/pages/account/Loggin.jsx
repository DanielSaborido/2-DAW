import React, { useState } from 'react'
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre de usuario:', user.username);
    console.log('Contraseña:', user.password);
    // Pendiente de comprovacion en indexeddb
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
      <Link to="./create-account">Crear cuenta</Link>
    </form>
  );
};

export default LoginForm