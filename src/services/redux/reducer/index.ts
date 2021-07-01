const DEFAULT_STATE = {
  authToken: null,
  langCode: null,
  password: null,
};

const applicationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        langCode: action.payload,
      };
    case 'SET_AUTH_TOKEN':
      return {
        ...state,
        authToken: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default applicationReducer;
