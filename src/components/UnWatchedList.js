import { observer } from "mobx-react";
import { useState } from "react";
import { DetailWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//store
import moviesData from "../Data/moviesData";

const UnWatchedList = () => {
  const [query, setQuery] = useState("");

  const moviesList = moviesData.movies.filter(
    (_movie) =>
      _movie.watched === true &&
      _movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const unWatchedListAfterFliter = moviesList.map((_movie) => (
    <MovieItem movie={_movie} watched={_movie.watched} />
  ));

  return (
    <>
      <div className="ListName">
        <h1>Movies List </h1>
        <h1 className="NumberOfItems">{unWatchedListAfterFliter.length}</h1>
      </div>
      <DetailWrapper>
        <SearchBar setQuery={setQuery} />
        {unWatchedListAfterFliter}
      </DetailWrapper>
    </>
  );
};

export default observer(UnWatchedList);
