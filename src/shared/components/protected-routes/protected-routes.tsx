import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import paths from '../../constants/paths';

interface IProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoutes = ({ children }: IProtectedRoutesProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  console.log('isAuthenticated: ', isAuthenticated);
  if (!isAuthenticated) {
    console.log('navigate');
    navigate(paths.login);
  }

  // return <>{isAuthenticated ? { children } : null}</>;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ProtectedRoutes;
