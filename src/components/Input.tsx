import React, {useState} from 'react';
import {KeyboardType, TextInput, View} from 'react-native';
import Title from './Title';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import {useDispatch} from 'react-redux';
import {
  setConfirmPasswordAction,
  setPasswordAction,
  setPhoneNumAction,
} from 'RoyalAutomobileClub/src/services/redux/actions';
import Eye from 'RoyalAutomobileClub/assets/icons/eye.png';
import EyeWithLine from 'RoyalAutomobileClub/assets/icons/eye-with-line.png';
import USAFlag from 'RoyalAutomobileClub/assets/icons/united-states.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Layout from 'RoyalAutomobileClub/assets/styles/Layout';
import General from 'RoyalAutomobileClub/assets/styles/General';
import Elements from 'RoyalAutomobileClub/assets/styles/Elements';
import IconImage from 'RoyalAutomobileClub/src/components/IconImage';

export default function Input({
  onChangeText,
  label,
  keyboardType,
  isPassword,
  background,
  value,
  isPhone = false,
  placeHolder = label,
  rowComponents,
}: {
  onChangeText?: any;
  value?: string;
  label: string;
  keyboardType?: KeyboardType;
  isPassword?: boolean;
  background?: Colors;
  isPhone?: boolean;
  placeHolder?: string;
  rowComponents?: boolean;
}) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [phoneNum, setPhoneNum] = useState<string | undefined>(undefined);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const onChangePassword = (value: string) => {
    if (label == 'Confirm New Password') {
      dispatch(setConfirmPasswordAction(value));
    } else {
      setPassword(value);
      dispatch(setPasswordAction(value));
    }
  };
  const onChangePhoneNum = (value: string) => {
    setPhoneNum(value);
    dispatch(setPhoneNumAction(value));
  };

  return (
    <>
      <View
        style={[
          Layout.flexStart,
          General.smallTopPadding,
          rowComponents ? Layout.flexDirectionRow : null,
          rowComponents ? Layout.alignItemsCenter : null,

          {
            borderBottomColor: rowComponents
              ? Colors.LIGHT_GRAY_2
              : 'transparent',
            borderBottomWidth: rowComponents ? 1 : 0,
          },
        ]}>
        {isPassword ? (
          <>
            <Title
              color={
                password || password == null ? Colors.LIGHT_GRAY : Colors.RED
              }
              title={label + '*'}
            />

            <View
              style={[
                Elements.fieldContainer,
                {
                  borderColor:
                    password || password == null
                      ? Colors.LIGHT_GRAY
                      : Colors.RED,
                  padding: 10,
                },
              ]}>
              <TextInput
                style={[Elements.passwordInput]}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder="Password"
                value={password}
                onChangeText={(val) => onChangePassword(val)}
              />
              <TouchableOpacity
                onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <IconImage source={secureTextEntry ? Eye : EyeWithLine} />
              </TouchableOpacity>
            </View>
          </>
        ) : isPhone ? (
          <>
            <Title
              color={
                phoneNum || phoneNum == null ? Colors.LIGHT_GRAY : Colors.RED
              }
              title={label + '*'}
            />

            <View
              style={[
                Elements.fieldContainer,
                {
                  borderColor:
                    phoneNum || phoneNum == null
                      ? Colors.LIGHT_GRAY
                      : Colors.RED,
                  padding: 0,
                },
              ]}>
              <View style={Elements.flagContainer}>
                <IconImage source={USAFlag} />
                <Title title="+1" />
              </View>
              <TextInput
                maxLength={10}
                style={[Elements.passwordInput, {margin: 10}]}
                autoCorrect={false}
                placeholder="xxx xxx xxxx"
                keyboardType="number-pad"
                value={phoneNum}
                onChangeText={(val) => onChangePhoneNum(val)}
              />
            </View>
          </>
        ) : (
          <>
            <Title
              color={value || value == null ? Colors.LIGHT_GRAY : Colors.RED}
              title={label + '*'}
              style={{width: '23%', textAlign: 'left'}}
            />

            <TextInput
              textAlign={rowComponents ? 'right' : 'left'}
              placeholder={placeHolder}
              style={[
                Elements.fieldContainer,
                {
                  borderColor:
                    value || value == null ? Colors.LIGHT_GRAY : Colors.RED,
                  borderWidth: rowComponents ? 0 : 1,
                  width: rowComponents ? '77%' : '100%',
                  // borderBottomWidth: 1,
                },
              ]}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
            />
          </>
        )}
      </View>
    </>
  );
}
