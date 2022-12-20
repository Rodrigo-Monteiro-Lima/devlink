import { StyledLogin } from './Login.styled';
import Logo from '../../components/Logo';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledLogin>
      <Logo />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Digite seu Email..."
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="on"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="*******"
        />
        <button type="submit">Acessar</button>
      </form>
    </StyledLogin>
  );
};

export default Login;
