import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <h1>
          Dev<span>Link</span>
        </h1>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
