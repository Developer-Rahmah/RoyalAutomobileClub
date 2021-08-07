import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import GridCard from 'RoyalAutomobileClub/src/components/GridCard';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/services/AllServicesScreenStyled';
import {GET} from 'RoyalAutomobileClub/src/services/config/api';
import {Client} from 'RoyalAutomobileClub/src/services/config/clients';
import ServiceCard from './components/ServiceCard';
import {Services} from './static/Services';

export default function AllServicesScreen() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = () => {
    Client.get(`${GET.SERVICES}`).then((res) => {
      if (res.data.status == '200') {
        setServices(res.data.data);
      } else {
        // setSuccess(false);
      }
    });
  };
  return (
    <>
      <Header title="Services" showBack />

      <ScrollView style={{backgroundColor: Colors.WHITE}}>
        <ContainerView>
          <Rows
            numColumns={2}
            isSectionList={false}
            data={services}
            renderItem={({item, index}) => {
              return (
                <ServiceCard
                  title={item.name}
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
