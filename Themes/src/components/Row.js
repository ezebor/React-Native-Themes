import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components';

const ContainerStyled = styled.View`
  flex: 0 0 auto;
`;

const TitleStyled = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const BodyStyled = styled.Text`
  padding-bottom: 20px;
`;

export default function Row({item}) {
  return (
    <ContainerStyled>
      <TitleStyled>{item.title}</TitleStyled>
      <BodyStyled>{item.body}</BodyStyled>
    </ContainerStyled>
  );
}
