import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import search from "./../../assets/images/search.png";
import { searchFilms } from "../../redux/film/film.action";

const SearchBox = ({films, searchFilms}) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    searchFilms(searchValue, films);
  }, [searchValue]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="search-container">
      <img src={search} className="searchIcon" alt="" />
      <input
        value={searchValue}
        type="text"
        onChange={handleChange}
        className="serchInput"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFiltered: state.film.isFiltered,
  filteredFilms: state.film.filteredFilms,
  films: state.film.films,
});


export default connect(mapStateToProps, { searchFilms })(SearchBox);
