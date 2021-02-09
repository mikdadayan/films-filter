function filterFilms(title, yearFrom, yearTo, dateFilter, films) {
  let filteredFilms = [];
  for (let film of films) {
    if (film.title.toLowerCase().includes(title.toLowerCase())) {
      filteredFilms.push(film);
    }
  }
  if (dateFilter === "newest") {
    filteredFilms.reverse();
  }

  if (yearFrom) {
    filteredFilms = filteredFilms.filter((film) => {
      return +yearFrom <= +film.year;
    });
  }

  if (yearTo && yearTo.length > 3) {
    filteredFilms = filteredFilms.filter((film) => {
      return +yearTo >= +film.year;
    });
  }

  return filteredFilms;
}

export default filterFilms;
