import React from 'react';

import {UserContextType} from '../../types/core/contexts/UserContextType';

import useAuth from '../../hooks/useAuth';

export const defaultUser: UserContextType = {
  singIn: () => {},
  singOut: () => {},
  user: null,
  initializing: true,
};

export const userContext = React.createContext(defaultUser);
export const useUser = () => React.useContext(userContext);

const UserProvider: React.FC = ({children}) => {
  const auth = useAuth();
  return <userContext.Provider value={auth}>{children}</userContext.Provider>;
};

export default UserProvider;
