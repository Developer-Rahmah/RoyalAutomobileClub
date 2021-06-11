import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Col from 'RoyalAutomobileClub/src/components/Col';
import EmptyListMessage from 'RoyalAutomobileClub/src/components/EmptyListMessage';
import {Product} from 'RoyalAutomobileClub/src/types/Product';

export default function Rows({
  showsVerticalScrollIndicator = false,
  data,
  renderItem,
  usePadding = false,
  paddingAmount = 50,
  keyExtractor,
}: {
  showsVerticalScrollIndicator?: boolean;
  data: Array<Product>;
  renderItem: ListRenderItem<Product>;
  usePadding?: boolean;
  paddingAmount?: number;
  keyExtractor: (item: Product, index: number) => string;
}) {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ListEmptyComponent={EmptyListMessage}
      contentContainerStyle={{paddingBottom: usePadding ? paddingAmount : 0}}
      renderItem={(props) => <Col style={{flex: 1}}>{renderItem(props)}</Col>}
    />
  );
}
