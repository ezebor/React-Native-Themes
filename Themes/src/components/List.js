import React from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components';
import Row from './Row';
import SeparatorStyled from './Separator';

const FlatListStyled = styled.FlatList`
  flex: 1 1 auto;
`;

export default function List() {
  const data = Array(10).fill({
    title: 'Un título',
    body: 'Un contenido',
  });

  const renderItem = ({item}) => {
    return <Row item={item} />;
  };

  const renderSeparator = () => <SeparatorStyled />;

  return (
    <FlatListStyled
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
    />
  );
}
