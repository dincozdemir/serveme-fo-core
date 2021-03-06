import { SESSION } from "../types";
import { config } from "../../config/platform";

export const login = (user) => async dispatch => {
    await config.localStorage.setItem('@ServeMe:user', JSON.stringify(user));
    dispatch({
        type: SESSION.LOGIN,
        payload: user
    });
};
