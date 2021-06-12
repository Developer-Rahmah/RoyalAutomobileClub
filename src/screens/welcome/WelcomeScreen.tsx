import React, {useEffect} from 'react';
import Header from 'RoyalAutomobileClub/src/components/Header';
import {MainContainer} from 'RoyalAutomobileClub/src/components/MainContainer';
import Title from 'RoyalAutomobileClub/src/components/Title';
import IconImage from 'RoyalAutomobileClub/IconImage';
import Lang from 'RoyalAutomobileClub/assets/images/lang.png';
import ARIcon from 'RoyalAutomobileClub/assets/icons/ar.png';
import ENIcon from 'RoyalAutomobileClub/assets/icons/en.png';

import ImageStyles from 'RoyalAutomobileClub/assets/styles/ImageStyles';
import {
  ChooseYourLanguageContainer,
  ContainerView,
  FlagAndLangContainer,
  RadioBtnSelectLangContainer,
  WelcomeContainer,
  WelcomeOnBoardContainer,
  RadioBtnContainer,
  TopPadding,
  LangImgContainer,
} from './styled';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import RadioButton from 'RoyalAutomobileClub/src/components/RadioButton';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguageAction} from 'RoyalAutomobileClub/src/services/redux/actions';
import LocalStorage from 'RoyalAutomobileClub/src/services/helper/LocalStorage';
import {I18nManager} from 'react-native';
import * as Updates from 'expo-updates';

export default function WelcomeScreen() {
  let lang = useSelector((state) => state.langCode);

  const [EN, setEN] = useState(lang == 'en');
  const [AR, setAR] = useState(lang == 'ar');
  const getLang = async () => {
    lang = await LocalStorage.get('lang');
    if (lang == 'ar') {
      setAR(true);
      setEN(false);
    } else {
      setEN(true);
      setAR(false);
    }
  };
  const dispatch = useDispatch();
  const onLanguagechange = (lang: string) => {
    if (lang == 'ar') {
      setAR(true);
      setEN(false);
      dispatch(setLanguageAction('ar'));
      LocalStorage.set('lang', 'ar');
      I18nManager.forceRTL(true);
      Updates.reloadAsync();
    } else {
      setEN(true);
      setAR(false);
      dispatch(setLanguageAction('en'));
      LocalStorage.set('lang', 'en');
      I18nManager.forceRTL(false);
      Updates.reloadAsync();
    }
  };
  useEffect(() => {
    getLang();
  }, [lang]);
  return (
    <>
      <Header title="Welcome" />
      <MainContainer>
        <>
          <ContainerView>
            <WelcomeContainer>
              <Title
                title="Welcome"
                fontFamily="Poppins-Medium"
                large
                color={Colors.BLACK}
              />
              <ChooseYourLanguageContainer>
                <WelcomeOnBoardContainer>
                  <Title
                    title="Welcome onboard,"
                    fontFamily="Poppins-Medium"
                    color={Colors.ORANGE}
                    small
                  />
                </WelcomeOnBoardContainer>
                <Title
                  title="Choose Your Language"
                  fontFamily="Poppins-Medium"
                  color={Colors.BLACK}
                />
              </ChooseYourLanguageContainer>
            </WelcomeContainer>
            <LangImgContainer>
              <IconImage source={Lang} style={ImageStyles.mediumImage} />
            </LangImgContainer>
            {/* ENGLISH lang */}
            <RadioBtnSelectLangContainer
              onPress={() => onLanguagechange('en')}
              isSelected={EN}>
              <FlagAndLangContainer>
                <IconImage source={ENIcon} />
                <Title
                  title="English"
                  fontFamily="Poppins-Regular"
                  medium
                  color={EN ? Colors.ORANGE : Colors.SEMI_BLACK}
                />
              </FlagAndLangContainer>
              <RadioBtnContainer>
                <RadioButton isSelected={EN} />
              </RadioBtnContainer>
            </RadioBtnSelectLangContainer>

            {/* ARABIC lang */}
            <TopPadding>
              <RadioBtnSelectLangContainer
                onPress={() => onLanguagechange('ar')}
                isSelected={AR}>
                <FlagAndLangContainer>
                  <IconImage source={ARIcon} />
                  <Title
                    title="Arabic"
                    fontFamily="Poppins-Regular"
                    medium
                    color={AR ? Colors.ORANGE : Colors.SEMI_BLACK}
                  />
                </FlagAndLangContainer>
                <RadioBtnContainer>
                  <RadioButton isSelected={AR} />
                </RadioBtnContainer>
              </RadioBtnSelectLangContainer>
            </TopPadding>
          </ContainerView>
        </>
      </MainContainer>
    </>
  );
}
