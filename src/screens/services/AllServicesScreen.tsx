import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import GridCard from 'RoyalAutomobileClub/src/components/GridCard';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/services/AllServicesScreenStyled';
import ServiceCard from './components/ServiceCard';
import {Services} from './static/Services';

export default function AllServicesScreen() {
  return (
    <>
      <Header title="Services" showBack />

      <ScrollView style={{backgroundColor: Colors.WHITE}}>
        <ContainerView>
          <Rows
            numColumns={2}
            isSectionList={false}
            data={Services}
            renderItem={({item, index}) => {
              return (
                <ServiceCard
                  title={item.title}
                  item={item}
                  index={index}
                  listing={item}
                />
              );
            }}
          />

          <View style={Elements.loginFieldsContainer} />
        </ContainerView>
      </ScrollView>
    </>
  );
}
