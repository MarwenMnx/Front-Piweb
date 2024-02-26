import * as api from '../api/authApi';

export const register = ({ username, password, role }) => async (dispatch) => {
  try {
    const data = await api.registerUser({ username, password, role });
    dispatch({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error });
  }
};

export const login = ({ username, password }) => async (dispatch) => {
  try {
    const data = await api.loginUser({ username, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
  }
};

