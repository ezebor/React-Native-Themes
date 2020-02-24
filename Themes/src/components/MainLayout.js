import React from 'react';
import {View, Button} from 'react-native';

import List from './List';

import styled from 'styled-components';

const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 0 0 100%;
`;

const ScrollViewStyled = styled.ScrollView`
  flex: 0 0 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

let mode = 'nocturno';

export default function MainLayout() {
  return (
    <SafeAreaViewStyled>
      <ScrollViewStyled>
        <Button
          title={`Cambiar a modo ${mode}`}
          onPress={() => {
            mode = 'diurno';
          }}
        />
        <List />
      </ScrollViewStyled>
    </SafeAreaViewStyled>
  );
}
