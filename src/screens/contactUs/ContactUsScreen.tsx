import React from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import {
  ContainerView,
  ImageAndTextContainer,
  CarouselContainer,
} from 'RoyalAutomobileClub/src/screens/contactUs/ContactUsScreenStyled';
import {
  ScrollView,
  View,
  StyleSheet,
  Linking,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from 'RoyalAutomobileClub/src/services/helper/Constant';
import Whatsapp from 'RoyalAutomobileClub/assets/svg/Whatsapp.svg';
import Call from 'RoyalAutomobileClub/assets/svg/Call.svg';
import Instgram from 'RoyalAutomobileClub/assets/svg/Instgram.svg';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Title from 'RoyalAutomobileClub/src/components/Title';
import ContactUsItem from './ContactUsItem';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Input from 'RoyalAutomobileClub/src/components/Input';
import User from 'RoyalAutomobileClub/assets/icons/user.png';
import PhoneCall from 'RoyalAutomobileClub/assets/icons/phone-call.png';

import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'RoyalAutomobileClub/src/services/hooks';
import Email from 'RoyalAutomobileClub/assets/icons/email-outlined.png';
import EmailOpened from 'RoyalAutomobileClub/assets/icons/email-opened.png';
import Button from 'RoyalAutomobileClub/src/components/Button';
import {Toast} from 'native-base';
import {validateEmail} from 'RoyalAutomobileClub/src/services/helper/validation';
import ErrorMsg from 'RoyalAutomobileClub/src/components/ErrorMsg';
export default function ContactUsScreen() {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(1);
  const navigation = useNavigation();
  const t = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  });
  const styles = StyleSheet.create({
    marginEnd: {
      marginEnd: 3,
    },
    paginationContainer: {
      paddingVertical: 8,
    },
    paginationDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginHorizontal: 0,
      marginVertical: 5,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    Linking.openURL(
      `mailto:contact@archi-interior.com?subject=message from app&body=${data.message}`,
    );
    Toast.show({
      text: t('your message sent successfully'),
      textStyle: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
      },
      style: {backgroundColor: Colors.ORANGE},

      duration: 2000,
      position: 'bottom',
    });
  };
  return (
    <>
      <Header title="About App" showMenu showBell />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={General.flex}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerView>
            <ImageAndTextContainer>
              <CarouselContainer>
                <MapView
                  style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 3}}
                />
              </CarouselContainer>
            </ImageAndTextContainer>
            <View
              style={[
                {
                  flexDirection: 'row',
                  backgroundColor: Colors.WHITE,
                  // flex: .7,

                  width: SCREEN_WIDTH,
                  paddingVertical: 30,
                  justifyContent: 'space-evenly',
                  marginBottom: 10,
                },
              ]}>
              <ContactUsItem
                title="Whatsapp"
                onPress={() =>
                  Linking.openURL(
                    'whatsapp://send?text=' +
                      'enter your message' +
                      '&phone=962795288209',
                  )
                }>
                <Whatsapp height={44} width={44} />
              </ContactUsItem>
              <ContactUsItem
                title="Call"
                onPress={() => Linking.openURL(`tel:${'962795288209'}`)}>
                <Call height={44} width={44} />
              </ContactUsItem>
              <ContactUsItem
                title="Instgram"
                onPress={() => Linking.openURL('https://nattech.online/racj/')}>
                <Instgram height={44} width={44} />
              </ContactUsItem>
            </View>
            <View
              style={[
                {
                  // flexDirection: 'row',
                  backgroundColor: Colors.WHITE,
                  // flex: .7,
                  alignItems: 'flex-start',
                  padding: 20,
                  width: SCREEN_WIDTH,
                  paddingVertical: 30,
                },
              ]}>
              <Title title="Send A Message." />
              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    placeholder={t('Name')}
                    leftIcon={User}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="name"
                rules={{
                  required: true,
                }}
              />
              {errors.name && <ErrorMsg errorMsg="This is required." />}

              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    keyboardType="number-pad"
                    placeholder={t('Phone')}
                    leftIcon={PhoneCall}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="phone"
                rules={{
                  required: true,
                }}
              />
              {errors.phone && <ErrorMsg errorMsg="This is required." />}

              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    keyboardType="email-address"
                    placeholder={t('E-mail')}
                    leftIcon={Email}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="email"
                rules={{
                  required: true,
                  pattern: {
                    value: validateEmail,
                  },
                }}
              />
              {errors.email && <ErrorMsg errorMsg="Invalid Email Address." />}

              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    placeholder={t('Message')}
                    leftIcon={EmailOpened}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="message"
                rules={{
                  required: true,
                }}
              />
              {errors.firstName && <ErrorMsg errorMsg="This is required." />}

              <View style={Elements.btnContainer}>
                <Button
                  locked={!isValid}
                  onClick={handleSubmit(onSubmit)}
                  title="Send"
                  txtColor={Colors.WHITE}
                />
              </View>
            </View>
            <View style={Elements.loginFieldsContainer} />
          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
