import React, { useRef } from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import AddImg from 'RoyalAutomobileClub/assets/images/add.png';
import Lock from 'RoyalAutomobileClub/assets/icons/lock.png';
import User from 'RoyalAutomobileClub/assets/icons/user.png';
import Email from 'RoyalAutomobileClub/assets/icons/email.png';
import Contacts from 'RoyalAutomobileClub/assets/icons/contacts.png';
import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors';
import { ContainerView, ImageAndTextContainer, ImageContainer } from './styled';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Button from 'RoyalAutomobileClub/src/components/Button';
import { KeyboardAvoidingView, Platform, ScrollView, View, Text } from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import { useForm, Controller } from 'react-hook-form';
import Input from 'RoyalAutomobileClub/src/components/Input';
import { Toast } from 'native-base';
import ErrorMsg from 'RoyalAutomobileClub/src/components/ErrorMsg';
import { validateEmail } from 'RoyalAutomobileClub/src/services/helper/validation';
import { useTranslation } from 'RoyalAutomobileClub/src/services/hooks';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';

export default function RegisterScreen() {

  const t = useTranslation()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  })
  const onSubmit = (data: any) => {
    if (data.password != data.confirmPassword) {
      Toast.show({
        text: t('The password and confirmation password do not match.'),
        textStyle: {
          color: Colors.WHITE,
          fontSize: 20,
          fontFamily: "Poppins-Medium",
          textAlign: 'center'
        },
        style: { backgroundColor: Colors.RED, },

        duration: 2000,
        position: 'bottom',
        onClose: reason => { },
      })

    } else {
      Toast.show({
        text: t('Welcome back'),
        textStyle: {
          color: Colors.WHITE,
          fontSize: 20,
          fontFamily: "Poppins-Medium",
          textAlign: 'center'
        },
        style: { backgroundColor: Colors.SUCCESS, },

        duration: 2000,
        position: 'bottom',
        onClose: reason => { },
      })
    }

  }
  return (
    <>
      <Header title="Register" showBack />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={General.flex}>
        <ScrollView>

          <ContainerView style={General.whiteBackgroundColor}>
            <ImageAndTextContainer >
              <ImageContainer style={{ flex: 0 }}>
                <IconImage source={AddImg} style={[ImageStyles.teaserImage,]} />
              </ImageContainer>
            </ImageAndTextContainer>
            <View style={Elements.loginFieldsContainer}>


              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder={t("First Name")}
                    leftIcon={User}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name='firstName'
                rules={{
                  required: true

                }}
              />
              {errors.email && <ErrorMsg errorMsg='This is required.' />}

              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder={t("Last Name")}
                    leftIcon={User}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name='lastName'
                rules={{
                  required: true

                }}
              />
              {errors.email && <ErrorMsg errorMsg='This is required.' />}
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    keyboardType='number-pad'
                    placeholder={t("Membership No.")}
                    leftIcon={Contacts}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name='membershipNo.'
                rules={{
                  required: true,

                }}
              />
              {errors.email && <ErrorMsg errorMsg='This is required.' />}
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    keyboardType='email-address'
                    placeholder={t("Email")}
                    leftIcon={Email}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name='email'
                rules={{
                  required: true,
                  pattern: {
                    value: validateEmail,
                  },
                }}
              />
              {errors.email && <ErrorMsg errorMsg='Invalid Email Address.' />}



              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    isPassword
                    leftIcon={Lock}
                    placeholder={t('Password')}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name='password'
                rules={{ required: true }}
              />
              {errors.password && <ErrorMsg errorMsg='This is required.' />}
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    isPassword
                    leftIcon={Lock}
                    placeholder={t('Confirm Password')}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name='confirmPassword'
                rules={{ required: true }}
              />
              {errors.password && <ErrorMsg errorMsg='This is required.' />}


            </View>
            <View style={Elements.btnContainer}>
              <Button
                locked={
                  !isValid

                }
                onClick={handleSubmit(onSubmit)} title="Register" txtColor={Colors.WHITE} />
              {/* <Title title="Create an account" color={Colors.ORANGE} /> */}
              <Title title="By Signing up you are accepting our" color={Colors.BLACK} />

              <View style={Layout.flexDirectionRow}>
                <Title title="Terms of use" color={Colors.ORANGE} style={General.smallTopMargin} />
                <Title title=" and  " color={Colors.BLACK} style={General.smallTopMargin} />
                <Title title="Privacy Policy" color={Colors.ORANGE} style={General.smallTopMargin} />

              </View>
              {/* <Text style={Elements.summary}>By Signing up you are accepting our
                <Text style={[Elements.summary, General.color]}>Terms of use</Text> <Text style={[Elements.summary,]}>and  <Text style={[Elements.summary, General.color]}>Privacy Policy</Text></Text></Text> */}
              <Title title="I have an account already" color={Colors.ORANGE} style={[General.underline, Layout.margin]} />
            </View>

          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
