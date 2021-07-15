import React from 'react';
import LoadingMore from 'RoyalAutomobileClub/src/components/LoadingMore';
import Col from 'RoyalAutomobileClub/src/components/Col';
import EmptyListMessage from 'RoyalAutomobileClub/src/components/EmptyListMessage';
import {FlatList} from 'react-native-gesture-handler';
import {SectionList} from 'react-native';
import General from 'RoyalAutomobileClub/assets/styles/General';
import {SCREEN_WIDTH} from '../services/helper/Constant';

/**
 *
 * @param {import('react-native').FlatListProps|{loading:boolean,bottomSpace:boolean,usePadding:boolean,paddingAmount:number,largeBottomSpace:boolean}} param0
 */
export default function Rows({
  loading,
  showsVerticalScrollIndicator = false,
  bottomSpace,
  largeBottomSpace,
  renderItem,
  usePadding = false,
  paddingAmount = 150,
  isSectionList,
  numColumns,
  data,

  ...rest
}: {
  loading?: boolean;
  showsVerticalScrollIndicator?: boolean;
  bottomSpace?: boolean;
  largeBottomSpace?: boolean;
  renderItem?: any;
  usePadding?: boolean;
  paddingAmount?: number;
  isSectionList?: boolean;
  numColumns?: number;
  data?: any;
  rest?: any;
}) {
  const Listing = isSectionList ? SectionList : (FlatList as React.ElementType);

  return (
    <Listing
      // columnWrapperStyle={{
      //   flex: 1,
      //   justifyContent: "space-around"}}
      style={{width: SCREEN_WIDTH}}
      data={data}
      numColumns={numColumns}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ListEmptyComponent={EmptyListMessage}
      // contentContainerStyle={{justifyContent: 'space-around'}}
      contentContainerStyle={{
        paddingBottom: usePadding ? paddingAmount : 0,
        width: '100%',
        paddingHorizontal: 7,
      }}
      ListFooterComponent={({}) => <LoadingMore loading={loading} />}
      renderItem={(props) => (
        <Col style={[bottomSpace && General.paddingBottom, {flex: 1}]}>
          {renderItem(props)}
        </Col>
      )}
      {...rest}
    />
  );
}
