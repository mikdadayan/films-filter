import FilmActionTypes from "./film.type";

const {
  ADD_FILM_SUCCESS,
  ADD_FILM_FAIL,
  LOAD_FILMS,
  FILTER_FILMS,
  FILTER_OFF,
} = FilmActionTypes;

const INITIAL_STATE = {
  films: [],
  isFiltered: false,
  filteredFilms: [],
};

const filmReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case LOAD_FILMS:
    case ADD_FILM_SUCCESS:
      return { ...state, films: payload.films };

    case FILTER_FILMS:
      return {
        ...state,
        isFiltered: true,
        filteredFilms: payload.filteredFilms,
      };
    case ADD_FILM_FAIL:
      return { ...state, films: state.films };
    case FILTER_OFF:
      return { ...state, filteredFilms: [], isFiltered: false };
    default:
      return state;
  }
};

export default filmReducer;
