import React, {useContext} from 'react';
import {store} from '../state/store';

import styled from 'styled-components';

const SeparatorStyled = styled.View`
  height: 1px;
  background-color: ${props => props.theme.styles.separator_line_color};
`;

export default function Separator() {
  const {state} = useContext(store);
  return <SeparatorStyled theme={state} />;
}
