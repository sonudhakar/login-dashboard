
import { UPDATE_TOKEN} from '../Actions/loginAction';

const initialState = {
  'token' : ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return{
        ...state,
        token : action.payload.token
      }
    default:
    return state;

  }
};

export default loginReducer;
