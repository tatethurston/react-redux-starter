import { API_FAILURE, FLASH_DESTROY } from '../actions';

const flash = (state = null, action) => {
  switch (action.type) {
    case API_FAILURE:
      return action.data.message;

    case FLASH_DESTROY:
        return null;

    default:
      return state;
  }
};

export default flash;
