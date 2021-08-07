import { I18nManager } from "react-native"
  const languageId = I18nManager.isRTL ? 'ar' : 'eng';

export const GET = {

  SLIDER: 'slider',
FACILITES:`facilities?language=${languageId}`,
NEWS:`news_and_events?language=${languageId}`,
SERVICES:`services?language=${languageId}`,
SERVICES_LISTING:`service_listing?language=${languageId}`,


}
export const POST = {
  SIGNUP: 'signup',
  LOGIN:'login',
  FORGOT:'forget',
  VERIFY:'verifycodeforget',
  CHANGE_PASSWORD:'changeresetpassword',
  RESET_PASSWORD:'change_password',
  UPDATE_PROFILE:'update_Profile'
}
