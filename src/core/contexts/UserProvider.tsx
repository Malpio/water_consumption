import React, {useContext, useState} from 'react';

import {UserContextType} from '../../types/core/contexts/UserContextType';

import useAuth from '../../hooks/useAuth';

export const defaultUser: UserContextType = {};

export const userContext = React.createContext(defaultUser);
export const useUser = () => React.useContext(userContext);

const UserProvider: React.FC = ({children}) => {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export default UserProvider;
