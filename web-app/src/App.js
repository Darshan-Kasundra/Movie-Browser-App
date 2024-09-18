import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import AboutPage from "./components/AboutPage";
import { Routes, Route } from "react-router-dom";
import MovieView from "./components/MovieView";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {

    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=95814c1adc280e1f8d969245f8a08de3`)
    .then(response => response.json())
    .then(data => {
      setSearchResults(data.results)
    })
    } 
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element = {<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
