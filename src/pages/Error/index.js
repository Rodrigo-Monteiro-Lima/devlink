import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { StyledError } from './Error.styled';

const Error = () => {
  return (
    <StyledError>
      <Logo />
      <div className="error">
        <h1>Página não encontrada!</h1>
        <p>Está página que está procurando não existe</p>
        <Link to="/">Voltar para home</Link>
      </div>
    </StyledError>
  );
};

export default Error;
