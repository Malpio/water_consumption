import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {LoginFormType} from '../../types/components/forms/LoginFormType';

import Input, {InputType} from '../Input';
import Button from '../Button';

type Props = {
  loading?: boolean;
  onSubmit: (data: LoginFormType) => void;
};

const LoginForm: React.VFC<Props> = ({loading, onSubmit}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormType>();

  return (
    <View>
      <Input
        name={'login'}
        control={control}
        error={errors.login}
        type={InputType.USERNAME}
        placeholder={'nazwa użytkownika'}
        required
      />
      <Input
        name={'password'}
        control={control}
        error={errors.password}
        type={InputType.PASSWORD}
        placeholder={'hasło'}
        required
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        style={styles.buttonContainer}
        text={'Zaloguj'}
        loading={loading}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
  },
});
