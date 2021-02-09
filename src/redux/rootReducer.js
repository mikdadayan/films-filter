import { combineReducers } from "redux";

import authReducer from './auth/auth.reducer';
import filmReducer from "./film/film.reducer";

const rootReducer = combineReducers({auth: authReducer, film: filmReducer});

export default rootReducer;