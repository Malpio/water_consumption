import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {LoginFormType} from '../types/components/forms/LoginFormType';

const useAuth = ({
  onSuccessLogin,
  onError,
  onSuccessLogout,
}: {
  onSuccessLogin?: () => void;
  onError?: () => void;
  onSuccessLogout?: () => void;
}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const singIn = ({email, password}: LoginFormType) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        onSuccessLogin?.();
      })
      .catch(onError);
  };

  const singOut = () => {
    auth()
      .signOut()
      .then(() => onSuccessLogout?.());
  };

  return {
    singIn,
    singOut,
    user,
    initializing,
  };
};

export default useAuth;
