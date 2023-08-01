import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Simple from "./Homepage/Navbar";
import Home from "./Homepage/Homepage";
import Sport from "./Homepage/Sport";
import Movie from "./Homepage/Movies";
import Series from "./Homepage/Series";
import Anime from "./Homepage/Anime";
import axios from "axios";
import MovieDesc from "./Movie/MovieDesc";
import SeriesDesc from "./Series/SeriesDesc";
import Terbaik from "./Terbaik/Terbaik";
import AnimeDesc from "./Anime/AnimeDesc";
import Search from "./Search/Search";
import MoviePlay from "./Movie/MoviePlay";
import SportPlay from "./Sport/SportPlay";
import SeriesPlay from "./Series/SeriesPlay";

function App() {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataSeries, setDataSeries] = useState([]);
  const [dataAnime, setDataAnime] = useState([]);
  const [dataSport, setDataSport] = useState([]);
  const fetchDataFilm = async () => {
    try {
      const responseFilm = await axios.get("http://localhost:3080/film");
      setDataFilm(responseFilm.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm([]);
    }
  };
  const fetchDataSeries = async () => {
    try {
      const responseSeries = await axios.get("http://localhost:3080/series");
      setDataSeries(responseSeries.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries([]);
    }
  };
  const fetchDataAnime = async () => {
    try {
      const responseAnime = await axios.get("http://localhost:3080/animefav");
      setDataAnime(responseAnime.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime([]);
    }
  };
  const fetchDataSport = async () => {
    try {
      const responseSport = await axios.get("http://localhost:3080/sport");
      setDataSport(responseSport.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSport([]);
    }
  };
  // const [userCondition, setUserCondition] = useState(false);
  // const auth = getAuth();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUserCondition(true);
  //     } else {
  //       setUserCondition(false);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [auth]);

  return (
    <>
    <Simple/>
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id/:judul" element={<MovieDesc dataFilm={dataFilm} />} />
        <Route path="/series/:id/:judul" element={<SeriesDesc dataSeries={dataSeries} />} />
        <Route path="/anime/:id/:judul" element={<AnimeDesc setDataAnime={dataAnime} />} />
        <Route path="/sport/:id/:judul" element={<SportPlay dataSport={dataSport} />} />
        <Route path="/movie/:id/:judul/play" element={<MoviePlay dataFilm={dataFilm} />} />
        <Route path="/series/:series_id/:judul/:episode/play" element={<SeriesPlay dataSeries={dataSeries} />} />
        <Route path="/series" element={<Series />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/terbaik" element={<Terbaik />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
