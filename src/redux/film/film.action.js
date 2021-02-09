import FilmActionTypes from "./film.type";

import filmsFilter from "../../utils/filter";

const {
  ADD_FILM_SUCCESS,
  ADD_FILM_FAIL,
  LOAD_FILMS,
  FILTER_FILMS,
  FILTER_OFF,
} = FilmActionTypes;

export const addFilmAction = (imageUrl, title, year, description) => async (
  dispatch
) => {
  try {
    if (
      imageUrl.trim().length > 0 &&
      title.trim().length > 0 &&
      description.trim().length > 0 &&
      year >= 1900
    ) {
      const films = JSON.parse(localStorage.getItem("films")) || [];
      const newFilm = {
        imageUrl,
        title,
        description,
        year,
        published: Number(Date.now()),
        id: Math.round(Math.random() * 100000),
      };
      films.push(newFilm);
      dispatch({
        type: ADD_FILM_SUCCESS,
        payload: { films },
      });
      localStorage.setItem("films", JSON.stringify(films));
    } else {
      dispatch({
        type: ADD_FILM_FAIL,
      });
      throw new Error("Please pass valid values!");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const loadFilms = (films) => async (dispatch) => {
  dispatch({
    type: LOAD_FILMS,
    payload: { films },
  });
};

export const filterFilms = (
  title,
  yearFrom,
  yearTo,
  dateFilter,
  films
) => async (dispatch) => {
  if (
    title === "" &&
    yearFrom === "" &&
    yearTo === "" &&
    dateFilter === "none"
  ) {
    dispatch({
      type: FILTER_OFF,
    });
    return;
  }
  const filteredFilms = filmsFilter(title, yearFrom, yearTo, dateFilter, films);
  dispatch({
    type: FILTER_FILMS,
    payload: { filteredFilms },
  });
};

export const searchFilms = (searchText, films) => async (dispatch) => {
  if (searchText === "") {
    dispatch({
      type: FILTER_OFF,
    });
    return;
  }
  let filteredFilms = [];
  for (let film of films) {
    if (
      film.description.toLowerCase().includes(searchText.toLowerCase()) ||
      film.title.toLowerCase().includes(searchText.toLowerCase())
    ) {
      filteredFilms.push(film);
    }
  }
  dispatch({
    type: FILTER_FILMS,
    payload: { filteredFilms },
  });
};
