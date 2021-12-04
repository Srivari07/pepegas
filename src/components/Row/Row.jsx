import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [animes, setAnimes] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setAnimes(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(animes);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {animes.map(
          (ani) =>
            ((isLargeRow && ani.poster_path) ||
              (!isLargeRow && ani.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={ani.id}
                src={`${base_url}${
                  isLargeRow ? ani.poster_path : ani.backdrop_path
                }`}
                alt={ani.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
