import React from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/serviceListing/ServiceListingScreenStyled';
import ServiceItemCard from './components/ServiceItemCard';
import {ServiceListing} from './static/ServiceListing';

export default function ServiceListingScreen() {
  return (
    <>
      <Header title="Services" showBack />

      <ScrollView style={{backgroundColor: Colors.WHITE}}>
        <ContainerView>
          <Rows
            isSectionList={false}
            data={ServiceListing}
            renderItem={({item}) => {
              return <ServiceItemCard item={item} />;
            }}
          />

          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
