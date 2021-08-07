import React, {useEffect, useRef, useState} from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';
import AddImg from 'RoyalAutomobileClub/assets/images/add.png';
import Lock from 'RoyalAutomobileClub/assets/icons/lock.png';
import User from 'RoyalAutomobileClub/assets/icons/user.png';
import Email from 'RoyalAutomobileClub/assets/icons/email.png';
import Contacts from 'RoyalAutomobileClub/assets/icons/contacts.png';
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
  Image,
  AsyncStorage,
} from 'react-native';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import {useForm, Controller} from 'react-hook-form';
import Input from 'RoyalAutomobileClub/src/components/Input';
import {Toast} from 'native-base';
import ErrorMsg from 'RoyalAutomobileClub/src/components/ErrorMsg';
import {validateEmail} from 'RoyalAutomobileClub/src/services/helper/validation';
import {useTranslation} from 'RoyalAutomobileClub/src/services/hooks';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import {Client} from 'RoyalAutomobileClub/src/services/config/clients';
import {POST} from 'RoyalAutomobileClub/src/services/config/api';

export default function UpdateScreen() {
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const [userId, setUserId] = useState();

  let formData;
  const navigation = useNavigation();
  const t = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  });
  const saveData = (data) => {
    AsyncStorage.setItem('user', JSON.stringify(data), (err) => {
      if (err) {
        console.log('an error');
        throw err;
      }
      console.log('success', data);
      navigation.navigate('CongratsScreen');
    }).catch((err) => {
      console.log('error is: ' + err);
    });
  };
  const onSubmit = async (data: any) => {
    if (data.password != data.confirmPassword) {
      Toast.show({
        text: t('The password and confirmation password do not match.'),
        textStyle: {
          color: Colors.WHITE,
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
          textAlign: 'center',
        },
        style: {backgroundColor: Colors.RED},

        duration: 2000,
        position: 'bottom',
        onClose: (reason) => {},
      });
    } else {
      setDisableBtn(true);

      formData = new FormData();
      formData.append('userid', userId);
      formData.append('first_name', data.firstName);
      formData.append('last_name', data.lastName);
      formData.append('membership_no', data.membershipNo);

      if (image != null) {
        // const imgUrl = image.uri;
        formData.append('image', {
          uri: image,
          type: 'image/jpeg',
          name: 'img.jpg',
        });
      }
      Client.post(`${POST.UPDATE_PROFILE}`, formData).then((res) => {
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
            saveData(res.data);
            navigation.goBack();
            Toast.show({
              text: 'success',
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
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
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
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
      if (value !== null) {
        // We have data!!
        setUser(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, [image]);
  return (
    <>
      <Header title="Profile" showBack />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={General.flex}>
        <ScrollView>
          <ContainerView style={General.whiteBackgroundColor}>
            <ImageAndTextContainer>
              <ImageContainer style={General.smallPadding}>
                <TouchableOpacity onPress={pickImage}>
                  {image != null ? (
                    <Image
                      source={{uri: image}}
                      style={[ImageStyles.teaserImage, ImageStyles.userProfile]}
                    />
                  ) : user.image ? (
                    <IconImage
                      source={{uri: user.image}}
                      style={[ImageStyles.teaserImage, {borderRadius: 100}]}
                    />
                  ) : (
                    <IconImage
                      source={AddImg}
                      style={[ImageStyles.teaserImage]}
                    />
                  )}
                </TouchableOpacity>
              </ImageContainer>
            </ImageAndTextContainer>
            <View style={Elements.loginFieldsContainer}>
              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    placeholder={user.first_name}
                    leftIcon={User}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="firstName"
              />

              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    placeholder={user.last_name}
                    leftIcon={User}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="lastName"
              />
              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    keyboardType="number-pad"
                    placeholder={user.membership_no}
                    leftIcon={Contacts}
                    onChangeText={(value: string) => onChange(value)}
                    value={value}
                  />
                )}
                name="membershipNo"
              />
            </View>
            <View style={[Elements.btnContainer]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChangePasswordScreen')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 20,
                }}>
                <IconImage source={Lock} />
                <Title
                  title="Change Password"
                  color={Colors.BLACK}
                  style={[General.underline]}
                />
              </TouchableOpacity>
              <Button
                locked={disableBtn == true}
                onClick={handleSubmit(onSubmit)}
                title="Save"
                txtColor={Colors.WHITE}
              />
            </View>
          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
