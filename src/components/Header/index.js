import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';

const Header = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <StyledHeader>
      <nav>
        <button type="button" onClick={handleLogout}>
          <BiLogOut size={28} color="#DB2629" />
        </button>
        <Link to="/admin">Links</Link>
        <Link to="/admin/social">Redes sociais</Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
