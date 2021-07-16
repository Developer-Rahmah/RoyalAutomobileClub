import React from 'react';
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

export default function LoginScreen() {
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
  const onSubmit = (data: any) => {
    console.log(data);
    Toast.show({
      text: t('Welcome back'),
      textStyle: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
      },
      style: {backgroundColor: Colors.SUCCESS},

      duration: 2000,
      position: 'bottom',
    });
    dispatch(setAuthTokenAction('ffff'));
    LocalStorage.set('authToken', 'fffff');
  };
  return (
    <>
      <Header title="Login" showBack />
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
              <Title title="Welcome back ," color={Colors.ORANGE} />

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

              <Controller
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
              {errors.password && <ErrorMsg errorMsg="This is required." />}

              <Title
                title="Forget Password?"
                style={General.smallTopMargin}
                color={Colors.ORANGE}
              />
            </View>
            <View style={Elements.btnContainer}>
              <Button
                locked={!isValid}
                onClick={handleSubmit(onSubmit)}
                title="Login"
                txtColor={Colors.WHITE}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Title title="Create an account" color={Colors.ORANGE} />
              </TouchableOpacity>
            </View>
          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
