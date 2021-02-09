import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterFilms } from "../../redux/film/film.action";
import FilmItem from "../film-Item/film-Item";
import "./main.css";

function Main({ films, filteredFilms, isFiltered, filterFilms }) {
  const [filter, setFilter] = useState({
    title: "",
    yearFrom: "",
    yearTo: "",
    dateFilter: "none",
  });

  const { title, yearFrom, yearTo, dateFilter } = filter;

  useEffect(() => {
    filterFilms(title, yearFrom, yearTo, dateFilter, films);
  }, [title, yearFrom, yearTo, dateFilter]);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  return (
    <div className="main-container">
      <div className="filter">
        <div className="filter-container">
          <h1>Filter</h1>
          <input
            name="title"
            value={title}
            onChange={handleChange}
            type="text"
            placeholder="title"
          />
          <input
            name="yearFrom"
            value={yearFrom}
            onChange={handleChange}
            type="number"
            placeholder="From year(yyyy)"
          />
          <input
            name="yearTo"
            value={yearTo}
            onChange={handleChange}
            type="number"
            placeholder="To year(yyyy)"
          />
          <select name="dateFilter" placeholder="date" onChange={handleChange}>
            <option defaultValue value="none">
              --Filter By Date--
            </option>
            <option value="newest">From lastest to oldest</option>
            <option value="oldest">From oldest to lastest</option>
          </select>
        </div>
      </div>
      <div className="main">
        {isFiltered
          ? filteredFilms.map((film) => <FilmItem key={film.id} {...film} />)
          : films.map((film) => <FilmItem key={film.id} {...film} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  films: state.film.films,
  filteredFilms: state.film.filteredFilms,
  isFiltered: state.film.isFiltered,
});

export default connect(mapStateToProps, { filterFilms })(Main);
