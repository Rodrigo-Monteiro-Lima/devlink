import React from 'react';
import { StyledSocial } from './Social.styled';

const Social = ({ url, children }) => {
  return (
    <StyledSocial href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </StyledSocial>
  );
};

export default Social;
