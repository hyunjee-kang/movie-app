import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state가 필요 없는 경우에는 function coponent 사용
function Movie({year, title, summary, poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">{genres.map(genre =><li className="genres__genre">{genre}</li>)}</ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;