import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import CoulmnCard from 'RoyalAutomobileClub/src/components/CoulmnCard';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/listing/ListingScreenStyled';

export default function ListingScreen() {
  const route = useRoute() as any;
  const dataListing = route?.params?.listing;
  const listingTitle = route?.params?.title;
  const type = route?.params?.type;

  return (
    <>
      <Header title={listingTitle} showBack />

      <ScrollView>
        <ContainerView>
          <Rows
            numColumns={1}
            isSectionList={false}
            data={dataListing}
            renderItem={({item}) => {
              return <CoulmnCard type={type} item={item} />;
            }}
          />

          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
