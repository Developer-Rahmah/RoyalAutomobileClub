const DEFAULT_STATE = {
  showGifImage: 'yes' as string,
  langCode: null,
};

const applicationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        langCode: action.payload,
      };
    case 'SET_SHOW_GIF_ICON':
      return {
        ...state,
        showGifImage: action.payload,
      };

    default:
      return state;
  }
};

export default applicationReducer;
