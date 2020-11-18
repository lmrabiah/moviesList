import { observer } from "mobx-react";
import { useState } from "react";
import { DetailWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
//store
import moviesData from "../Data/moviesData";

const unWatchedList = () => {
  const moviesList = moviesData.movies.filter(
    (_movie) => _movie.watched === true
  );

  const unWatchedListAfterFliter = moviesList.map((_movie) => (
    <MovieItem movie={_movie} />
  ));
  // /////

  // const [query, setQuery] = useState("");

  //   const moviesList = moviesData.movies.filter(
  //     (_movie) => _movie.watched === false && _movie.title.includes(query)
  //   );

  //   const watchedList = moviesList.map((_movie) => (
  //     <MovieItem movie={_movie} watched={_movie.watched} />
  //   ));

  //
  return (
    <>
      <SearchBar />
      <DetailWrapper>{unWatchedListAfterFliter}</DetailWrapper>
    </>
  );
};

export default observer(unWatchedList);
