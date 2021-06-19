import React, { useState } from 'react'
import { ImageSourcePropType, KeyboardType, TouchableOpacity, View } from 'react-native'
import { TextField } from 'rn-material-ui-textfield'
import { Colors } from 'RoyalAutomobileClub/assets/styles/Colors'
import Elements from 'RoyalAutomobileClub/assets/styles/Elements'
import Layout from 'RoyalAutomobileClub/assets/styles/Layout'
import Eye from 'RoyalAutomobileClub/assets/icons/eye.png';
import EyeWithLine from 'RoyalAutomobileClub/assets/icons/eye-with-line.png'

import IconImage from './IconImage'

export default function Input({
  onChangeText,

  leftIcon: leftIcon,
  placeholder,
  isPassword,
}: {
  onChangeText?: any
  value?: string
  label?: string
  keyboardType?: KeyboardType
  leftIcon?: ImageSourcePropType
  placeholder?: string
  isPassword?: boolean
}) {

  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const renderRightAccessory = () => {
    return (
      <>
        {isPassword ?
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <IconImage small style={{ marginStart: 10 }} source={showPassword ? EyeWithLine : Eye} />
          </TouchableOpacity>
          :
          null}
      </>
    )
  }
  const renderLeftAccessory = () => {
    return (

      <IconImage small style={{ marginEnd: 10 }} source={leftIcon} />

    )
  }
  return (
    <TextField
      renderRightAccessory={() => renderRightAccessory()}
      renderLeftAccessory={() => renderLeftAccessory()}
      placeholder={placeholder}
      secureTextEntry={showPassword}
      onBlur={() => setIsFocused(false)}
      lineWidth={0}
      activeLineWidth={0}
      style={{ justifyContent: 'center', alignItems: 'center', }}
      onFocus={() => setIsFocused(true)}
      baseColor={Colors.GRAY}
      affixTextStyle={{ marginTop: -20 }}
      contentInset={{ input: -5 }}

      inputContainerStyle={Layout.flexCenter}
      tvParallaxShiftDistanceY={-100}
      onChangeText={onChangeText}
      containerStyle={[Elements.inputContainer, { borderColor: isFocused ? Colors.ORANGE : Colors.LIGHT_GRAY, }]}

    />
  )
}

