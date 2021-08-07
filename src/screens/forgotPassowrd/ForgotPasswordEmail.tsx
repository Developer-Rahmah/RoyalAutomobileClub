import React, {useState} from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import LoginImg from 'RoyalAutomobileClub/assets/images/login.png';
import Lock from 'RoyalAutomobileClub/assets/icons/lock.png';
import Email from 'RoyalAutomobileClub/assets/icons/email.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import {ContainerView, ImageAndTextContainer, ImageContainer} from './styled';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Button from 'RoyalAutomobileClub/src/components/Button';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {useForm, Controller} from 'react-hook-form';
import Input from 'RoyalAutomobileClub/src/components/Input';
import {Toast} from 'native-base';
import ErrorMsg from 'RoyalAutomobileClub/src/components/ErrorMsg';
import {validateEmail} from 'RoyalAutomobileClub/src/services/helper/validation';
import {useTranslation} from 'RoyalAutomobileClub/src/services/hooks';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setAuthTokenAction} from 'RoyalAutomobileClub/src/services/redux/actions';
import LocalStorage from 'RoyalAutomobileClub/src/services/helper/LocalStorage';
import {Client} from 'RoyalAutomobileClub/src/services/config/clients';
import {POST} from 'RoyalAutomobileClub/src/services/config/api';

export default function ForgotPasswordEmail() {
  let formData;
  const [disableBtn, setDisableBtn] = useState(false);

  const navigation = useNavigation();
  const t = useTranslation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  });
  // const onSubmit = (data: any) => {
  //   console.log(data);
  //   Toast.show({
  //     text: t('Welcome back'),
  //     textStyle: {
  //       color: Colors.WHITE,
  //       fontSize: 20,
  //       fontFamily: 'Poppins-Medium',
  //       textAlign: 'center',
  //     },
  //     style: {backgroundColor: Colors.ORANGE},

  //     duration: 2000,
  //     position: 'bottom',
  //   });
  //   dispatch(setAuthTokenAction('ffff'));
  //   LocalStorage.set('authToken', 'fffff');
  // };
  const saveData = (data) => {
    AsyncStorage.setItem('userId', data.id);

    AsyncStorage.setItem('user', JSON.stringify(data), (err) => {
      if (err) {
        console.log('an error');
        throw err;
      }
      console.log('success', data);

      // navigation.navigate('CongratsScreen');
      // dispatch(setAuthTokenAction('ffff'));
      // LocalStorage.set('authToken', 'fffff');
    }).catch((err) => {
      console.log('error is: ' + err);
    });
  };

  const onSubmit = async (data: any) => {
    setDisableBtn(true);

    formData = new FormData();
    formData.append('email', data.email);

    Client.post(`${POST.FORGOT}`, formData).then((res) => {
      console.log('resssresss', res);
      if (res.status == 200) {
        if (res.data.status == 400) {
          Toast.show({
            text: res.data.message,
            textStyle: {
              color: Colors.WHITE,
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
            },
            type: 'danger',
            duration: 2000,
          });
        } else {
          navigation.navigate('ForgotPasswordCode', {email: data.email});
          // saveData(res.data);
          Toast.show({
            text: res.data.message,
            textStyle: {
              color: Colors.WHITE,
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
            },
            style: {backgroundColor: Colors.ORANGE},

            duration: 2000,
          });
        }
        setDisableBtn(false);
        console.log('datttta', res.data);
        // Toast.show({
        //   text: t('Registered Successfully'),
        //   textStyle: {
        //     color: Colors.WHITE,
        //     fontSize: 20,
        //     fontFamily: 'Poppins-Medium',
        //     textAlign: 'center',
        //   },
        //   style: {backgroundColor: Colors.ORANGE},

        //   duration: 2000,
        // });
      } else {
        setDisableBtn(false);
      }
    });
    // await fetch(uri, options).then((res) => {
    //   console.log('resss', res);

    //   res.json().then(function (response) {
    //     console.log('response', response);
    //     if (response.status == 'error') {
    //       setDisableBtn(false);
    //       Toast.show({
    //         text: response.message,
    //         textStyle: {
    //           color: Colors.WHITE,
    //           fontSize: 20,
    //           fontFamily: 'Poppins-Medium',
    //           textAlign: 'center',
    //         },
    //         type: 'danger',
    //         duration: 2000,
    //       });
    //     } else if (response.status == 400) {
    //       setDisableBtn(false);
    //       Toast.show({
    //         text: response.message,
    //         textStyle: {
    //           color: Colors.WHITE,
    //           fontSize: 20,
    //           fontFamily: 'Poppins-Medium',
    //           textAlign: 'center',
    //         },
    //         type: 'danger',
    //         duration: 2000,
    //       });
    //     } else {
    //       Toast.show({
    //         text: response.message,
    //         textStyle: {
    //           color: Colors.WHITE,
    //           fontSize: 20,
    //           fontFamily: 'Poppins-Medium',
    //           textAlign: 'center',
    //         },
    //         style: {backgroundColor: Colors.ORANGE},

    //         duration: 2000,
    //       });
    //       setDisableBtn(false);
    //       navigation.navigate('CongratsScreen');
    //     }
    //   });
    // });
    // // navigation.navigate('CongratsScreen');
  };

  return (
    <>
      <Header title="Forgot Password" showBack />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={General.flex}>
        <ScrollView>
          <ContainerView>
            <ImageAndTextContainer>
              <ImageContainer style={{flex: 0}}>
                <IconImage source={LoginImg} style={ImageStyles.mediumImage} />
              </ImageContainer>
            </ImageAndTextContainer>
            <View style={Elements.loginFieldsContainer}>
              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    keyboardType="email-address"
                    placeholder={t('Email')}
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

              {/* <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    isPassword
                    leftIcon={Lock}
                    placeholder={t('Password')}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="password"
                rules={{required: true}}
              />
              {errors.password && <ErrorMsg errorMsg="This is required." />} */}
            </View>
            <View style={Elements.btnContainer}>
              <Button
                locked={!isValid || disableBtn == true}
                onClick={handleSubmit(onSubmit)}
                title="Send"
                txtColor={Colors.WHITE}
              />
            </View>
          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
