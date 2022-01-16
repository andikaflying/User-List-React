import getDisplayedDate from '../utilities/DateUtils';

export const initialState = {
  loading: '',
  error: '',
  realData: [],
  data: [],
};

export const DISPLAY_USERS_SUCCESS = 'Display Users Success';
export const DISPLAY_USERS_FAILURE = 'Display Users Failure';
export const ERROR_MESSAGE = 'Server error';
export const SEARCH_USERS_SUCCESS = 'Search Users Success';

export const userReducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_USERS_SUCCESS: {
      const result = action.payload;
      result.map((singleData) => {
        singleData.createdAt = getDisplayedDate(singleData.createdAt);

        return singleData;
      });

      return {
        ...state,
        data: action.payload,
        realData: action.payload,
      };
    }
    case DISPLAY_USERS_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
