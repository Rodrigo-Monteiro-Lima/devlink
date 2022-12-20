import React from 'react';

const Social = ({ url, children }) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default Social;
