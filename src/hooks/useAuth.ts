import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {LoginFormType} from '../types/components/forms/LoginFormType';
import {UseAuthCallbacksType} from '../types/hooks/UseAuthType';
import {UseAuthResult} from '../types/hooks/UseAuthType';

const useAuth = (): UseAuthResult => {
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

  const singIn = ({
    email,
    password,
    onError,
    onSuccess,
  }: LoginFormType & UseAuthCallbacksType) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(onSuccess)
      .catch(onError);
  };

  const singOut = (callbacks?: UseAuthCallbacksType) => {
    auth().signOut().then(callbacks?.onSuccess).catch(callbacks?.onError);
  };

  return {
    singIn,
    singOut,
    user,
    initializing,
  };
};

export default useAuth;
