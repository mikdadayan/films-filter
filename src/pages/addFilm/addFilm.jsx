import React, { useState } from "react";
import { connect } from "react-redux";
import { addFilmAction } from "../../redux/film/film.action";

import "./addFilm.css";

function AddFilm({ addFilmAction, history }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState(1900);
  const [description, setDescription] = useState("");
  const handleAddFilm = (e) => {
    e.preventDefault();
    addFilmAction(imageUrl, title, year, description);
    setImageUrl("");
    setTitle("");
    setYear(1900);
    setDescription("");
    history.push('/');
    alert("ok");
  };

  return (
    <div className="addFilm">
      <h1>ADD film</h1>
      <form className="add-film-form" onSubmit={handleAddFilm}>
        <input
          value={imageUrl}
          placeholder="image url"
          type="text"
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
        <input
          value={title}
          placeholder="title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <input
          value={year}
          placeholder="year"
          type="number"
          onChange={(event) => setYear(event.target.value)}
          required
        />
        <textarea
          value={description}
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
          className="textArea"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default connect(null, { addFilmAction })(AddFilm);
