import React, {useContext} from 'react';
import {Button} from 'react-native';
import {store} from '../state/store';
import List from './List';

import styled from 'styled-components';

const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 0 0 100%;
`;

const ScrollViewStyled = styled.ScrollView`
  flex: 0 0 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.theme.background_color};
`;

export default function MainLayout() {
  const {state, dispatch} = useContext(store);
  return (
    <SafeAreaViewStyled>
      <ScrollViewStyled theme={state}>
        <Button
          title={`Cambiar a modo ${state.name}`}
          onPress={() => {
            dispatch({type: state.switch_to});
          }}
        />
        <List />
      </ScrollViewStyled>
    </SafeAreaViewStyled>
  );
}
