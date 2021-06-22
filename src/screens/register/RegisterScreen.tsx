import React, { useEffect, useRef, useState } from 'react';
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
import { KeyboardAvoidingView, Platform, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import { useForm, Controller } from 'react-hook-form';
import Input from 'RoyalAutomobileClub/src/components/Input';
import { Toast } from 'native-base';
import ErrorMsg from 'RoyalAutomobileClub/src/components/ErrorMsg';
import { validateEmail } from 'RoyalAutomobileClub/src/services/helper/validation';
import { useTranslation } from 'RoyalAutomobileClub/src/services/hooks';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterScreen() {
  const [image, setImage] = useState(null);

  const navigation = useNavigation();
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
        text: t('Registered Successfully'),
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
      navigation.navigate('CongratsScreen')

    }
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, [image]);
  return (
    <>
      <Header title="Register" showBack />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={General.flex}>
        <ScrollView>

          <ContainerView style={General.whiteBackgroundColor}>
            <ImageAndTextContainer >
              <ImageContainer style={General.smallPadding}>
                <TouchableOpacity onPress={pickImage}>
                  {/* <IconImage source={AddImg} style={[ImageStyles.teaserImage,]} /> */}
                  {image != null ?
                    <Image source={{ uri: image }} style={[ImageStyles.teaserImage, ImageStyles.userProfile]} />
                    :
                    <IconImage source={AddImg} style={[ImageStyles.teaserImage,]} />
                  }
                </TouchableOpacity>
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
              {errors.firstName && <ErrorMsg errorMsg='This is required.' />}

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
              {errors.lastName && <ErrorMsg errorMsg='This is required.' />}
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
                name='membershipNo'
                rules={{
                  required: true,

                }}
              />
              {errors.membershipNo && <ErrorMsg errorMsg='This is required.' />}
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
              {errors.confirmPassword && <ErrorMsg errorMsg='This is required.' />}


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

              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Title title="I have an account already" color={Colors.ORANGE} style={[General.underline, Layout.margin]} />
              </TouchableOpacity>
            </View>

          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
