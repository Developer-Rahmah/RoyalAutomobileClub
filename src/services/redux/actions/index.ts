export const setAuthTokenAction = (authToken: string) => ({
  type: 'SET_AUTH_TOKEN',
  payload: authToken,
});
export const setLanguageAction = (langCode: string) => ({
  type: 'SET_LANGUAGE',
  payload: langCode,
});
export const setPasswordAction = (password: string) => ({
  type: 'SET_PASSWORD',
  payload: password,
});
