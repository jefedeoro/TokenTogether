import { combineReducers } from "redux";

function token(state = {}, action) {
  switch (action.type) {
    case "TOKEN_NAME":
      return { ...state, fname: action.fname };
      case "TOKEN_SYM":
      return { ...state, fsymbol: action.fsymbol };
      case "TOTAL_SUPPLY":
      return { ...state, ftotalSupply: action.ftotalSupply };
    //   case "ACCOUNT_ID":
    //   return { ...state, faccoutnId: action.faccoutnId };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  token
});

export default rootReducer;
