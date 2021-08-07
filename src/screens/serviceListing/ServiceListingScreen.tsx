import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Rows from 'RoyalAutomobileClub/src/components/Rows';
import {ContainerView} from 'RoyalAutomobileClub/src/screens/serviceListing/ServiceListingScreenStyled';
import {GET} from 'RoyalAutomobileClub/src/services/config/api';
import {Client} from 'RoyalAutomobileClub/src/services/config/clients';
import ServiceItemCard from './components/ServiceItemCard';
import {ServiceListing} from './static/ServiceListing';

export default function ServiceListingScreen() {
  const [services, setServices] = useState([]);
  const route = useRoute() as any;

  useEffect(() => {
    getServices();
  }, []);
  const getServices = () => {
    Client.get(`${GET.SERVICES_LISTING}&id=${route.params.id}`).then((res) => {
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
            isSectionList={false}
            data={services}
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
