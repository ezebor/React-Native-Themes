import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components';

const SeparatorStyled = styled.View`
  height: 1px;
  background-color: grey;
`;

export default function Separator() {
  return <SeparatorStyled />;
}
