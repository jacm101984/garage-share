import React, { useState } from 'react';

const LoginPage = ({ setIsLoggedIn, navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('home');
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow mt-12">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full p-2 mb-4 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </div>
  );
};

export default LoginPage;
