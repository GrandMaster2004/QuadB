import { LOGIN, LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
