import { StyledLogin } from './Login.styled';
import Logo from '../../components/Logo';
import { useState } from 'react';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Bem vindo!');
        navigate('/admin', { replace: true });
      })
      .catch(() => toast.error('Erro ao tentar fazer o login!'));
  };

  return (
    <StyledLogin>
      <Logo />
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Digite seu Email..."
        />
        <Input
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
