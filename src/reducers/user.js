import { LOGIN, LOGOUT } from '../actions';

const user = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.data;

    case LOGOUT:
        return null;

    default:
      return state;
  }
};

export default user;
