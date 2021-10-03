import {LoginFormType} from '../../types/components/forms/LoginFormType';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type UseAuthCallbacksType = {
  onSuccess?: () => void;
  onError?: () => void;
};

export type UseAuthResult = {
  singIn: ({
    email,
    password,
    onError,
    onSuccess,
  }: LoginFormType & UseAuthCallbacksType) => void;
  singOut: (callbacks?: UseAuthCallbacksType) => void;
  user: FirebaseAuthTypes.User | null;
  initializing: boolean;
};
