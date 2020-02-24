import React, {useContext} from 'react';
import {store} from '../state/store';

import styled from 'styled-components';

const ContainerStyled = styled.View`
  flex: 0 0 auto;
`;

const TitleStyled = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${props => props.theme.styles.text_color};
`;

const BodyStyled = styled.Text`
  padding-bottom: 20px;
  color: ${props => props.theme.styles.text_color};
`;

export default function Row({item}) {
  const {state} = useContext(store);
  return (
    <ContainerStyled>
      <TitleStyled theme={state}>{item.title}</TitleStyled>
      <BodyStyled theme={state}>{item.body}</BodyStyled>
    </ContainerStyled>
  );
}
