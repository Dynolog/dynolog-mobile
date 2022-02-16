import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Spinner } from '../spinner';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
  disabled?: boolean;
};

export function Button({
  isLoading = false,
  children,
  disabled = false,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container
      isLoading={isLoading}
      disabled={isLoading || disabled}
      {...rest}>
      {isLoading && <Spinner />}

      {!isLoading && <S.Label>{children}</S.Label>}
    </S.Container>
  );
}