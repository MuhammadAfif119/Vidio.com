import React, { useEffect, useState } from "react";
import {
  Box,
  Link,
  Flex,
  HStack,
  Image,
  Button,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Search() {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataSport, setDataSport] = useState([]);
  const [dataAnime, setDataAnime] = useState([]);
  const [dataSeries, setDataSeries] = useState([]);
  const [currentFilmSlide, setCurrentFilmSlide] = useState(0);
  const [currentSeriesSlide, setCurrentSeriesSlide] = useState(0);
  const [currentAnimeSlide, setCurrentAnimeSlide] = useState(0);
  const params = useParams();
  const Navigate = useNavigate(0);
  const searchTerm = params.searchTerm;

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const handleNavigate = () => {
    try {
      Navigate(`/movie/${dataFilm.judul}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    try {
      Navigate(`/search/${searchTerm}`);
      fetchDataFilm();
      fetchDataSeries();
      fetchDataAnime();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataFilm = async () => {
    try {
      const responseFilm = await axios.get(
        `http://localhost:3080/searchfilm/${searchTerm}`
      );

      setDataFilm(responseFilm.data);
      console.log(dataSeries, "mm", dataFilm, "ii", dataAnime);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm([]);
    }
  };

  const fetchDataSeries = async () => {
    try {
      const responseSeries = await axios.get(
        `http://localhost:3080/searchseries/${searchTerm}`
      );
      setDataSeries(responseSeries.data);
      console.log(dataSeries, "mm", dataFilm, "ii", dataAnime);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries([]);
    }
  };

  const fetchDataAnime = async () => {
    try {
      const responseAnime = await axios.get(
        `http://localhost:3080/searchanime/${searchTerm}`
      );
      setDataAnime(responseAnime.data);
      console.log(dataSeries, "mm", dataFilm, "ii", dataAnime);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime([]);
    }
  };

  const slidesPerFilm = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalFilmSlides = Math.ceil(dataFilm.length / slidesPerFilm);

  const handlePrevFilmSlide = () => {
    setCurrentFilmSlide((prev) =>
      prev === 0 ? totalFilmSlides - 1 : prev - 1
    );
  };

  const handleNextFilmSlide = () => {
    setCurrentFilmSlide((prev) =>
      prev === totalFilmSlides - 1 ? 0 : prev + 1
    );
  };

  const slidesPerSeries = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeriesSlides = Math.ceil(dataSeries.length / slidesPerSeries);

  const handlePrevSeriesSlide = () => {
    setCurrentSeriesSlide((prev) =>
      prev === 0 ? totalSeriesSlides - 1 : prev - 1
    );
  };

  const handleNextSeriesSlide = () => {
    setCurrentSeriesSlide((prev) =>
      prev === totalSeriesSlides - 1 ? 0 : prev + 1
    );
  };

  const slidesPerAnime = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalAnimeSlides = Math.ceil(dataAnime.length / slidesPerAnime);

  const handlePrevAnimeSlide = () => {
    setCurrentAnimeSlide((prev) =>
      prev === 0 ? totalAnimeSlides - 1 : prev - 1
    );
  };

  const handleNextAnimeSlide = () => {
    setCurrentAnimeSlide((prev) =>
      prev === totalAnimeSlides - 1 ? 0 : prev + 1
    );
  };

  console.log(searchTerm, "gg");
  console.log(dataSeries, "mm", dataFilm, "ii", dataAnime);

  useEffect(() => {
    fetchDataFilm();
    fetchDataSeries();
    fetchDataAnime();
  }, []);

  return (
    <>
      <Box bg="#edf3f8">
        <Box bg="#edf3f8">
          {/* Carousel */}
          {/* ... Previous carousel code ... */}

          {/* Movie */}
          <Text
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            marginLeft="60px"
            w="full"
            fontSize="xl"
            fontWeight="bold"
          >
            Movie
          </Text>
          <Flex
            marginLeft="20px"
            marginTop="50px"
            direction="row"
            justifyContent="center"
            p={4}
            bg="#edf3f8"
            pos="relative"
            overflow="hidden"
          >
            <Flex
              h="300px"
              w="full"
              transition="all .5s"
              ml={`-${currentFilmSlide * 210}%`}
            >
              {dataFilm.map((film, index) => (
                <Box
                  key={index}
                  boxSize="auto"
                  shadow="md"
                  flex="none"
                  opacity={
                    index >= currentFilmSlide * slidesPerFilm &&
                    index < (currentFilmSlide + 1) * slidesPerFilm
                      ? 1
                      : 0
                  }
                  pointerEvents={
                    index >= currentFilmSlide * slidesPerFilm &&
                    index < (currentFilmSlide + 1) * slidesPerFilm
                      ? "auto"
                      : "none"
                  }
                >
                  <Image
                    src={film.poster}
                    alt={film.judul}
                    value={film.id}
                    boxSize="full"
                    p={4}
                    rounded="lg"
                    backgroundSize="cover"
                    onClick={() => Navigate(`/movie/${film.id}/${film.judul}`)}
                  />
                </Box>
              ))}
            </Flex>
            <Text
              {...arrowStyles}
              left="0"
              bg="rgba(0, 0, 0, 0.3)"
              borderRadius="50%"
              onClick={handlePrevFilmSlide}
            >
              &#10094;
            </Text>
            <Text
              {...arrowStyles}
              right="0"
              bg="rgba(0, 0, 0, 0.3)"
              borderRadius="50%"
              onClick={handleNextFilmSlide}
            >
              &#10095;
            </Text>
          </Flex>
        </Box>
        <Box bg="#edf3f8">
          {/* Carousel */}
          {/* ... Previous carousel code ... */}

          {/* Series */}
          <Text
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            marginLeft="60px"
            w="full"
            fontSize="xl"
            fontWeight="bold"
          >
            Series
          </Text>
          <Flex
            marginLeft="20px"
            marginTop="50px"
            direction="row"
            justifyContent="center"
            p={4}
            bg="#edf3f8"
            pos="relative"
            overflow="hidden"
          >
            <Flex
              h="300px"
              w="full"
              transition="all .5s"
              ml={`-${currentSeriesSlide * 210}%`}
            >
              {dataSeries.map((series, index) => (
                <Box
                  key={index}
                  boxSize="auto"
                  shadow="md"
                  flex="none"
                  opacity={
                    index >= currentSeriesSlide * slidesPerSeries &&
                    index < (currentSeriesSlide + 1) * slidesPerSeries
                      ? 1
                      : 0
                  }
                  pointerEvents={
                    index >= currentSeriesSlide * slidesPerSeries &&
                    index < (currentSeriesSlide + 1) * slidesPerSeries
                      ? "auto"
                      : "none"
                  }
                >
                  <Image
                    src={series.poster}
                    alt={series.title}
                    boxSize="full"
                    p={4}
                    rounded="lg"
                    backgroundSize="cover"
                    onClick={() =>
                      Navigate(`/series/${series.id}/${series.judul}`)
                    }
                  />
                </Box>
              ))}
            </Flex>
            <Text
              {...arrowStyles}
              left="0"
              bg="rgba(0, 0, 0, 0.3)"
              borderRadius="50%"
              onClick={handlePrevSeriesSlide}
            >
              &#10094;
            </Text>
            <Text
              {...arrowStyles}
              right="0"
              bg="rgba(0, 0, 0, 0.3)"
              borderRadius="50%"
              onClick={handleNextSeriesSlide}
            >
              &#10095;
            </Text>
          </Flex>
        </Box>
        <Box bg="#edf3f8">
          {/* Carousel */}
          {/* ... Previous carousel code ... */}

          {/* Anime */}
          <Text
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            marginLeft="60px"
            w="full"
            fontSize="xl"
            fontWeight="bold"
          >
            Anime
          </Text>
          <Flex
            marginLeft="20px"
            marginTop="50px"
            direction="row"
            justifyContent="center"
            p={4}
            bg="#edf3f8"
            pos="relative"
            overflow="hidden"
          >
            <Flex
              h="300px"
              w="full"
              transition="all .5s"
              ml={`-${currentAnimeSlide * 210}%`}
            >
              {dataAnime.map((anime, index) => (
                <Box
                  key={index}
                  boxSize="auto"
                  shadow="md"
                  flex="none"
                  opacity={
                    index >= currentAnimeSlide * slidesPerAnime &&
                    index < (currentAnimeSlide + 1) * slidesPerAnime
                      ? 1
                      : 0
                  }
                  pointerEvents={
                    index >= currentAnimeSlide * slidesPerAnime &&
                    index < (currentAnimeSlide + 1) * slidesPerAnime
                      ? "auto"
                      : "none"
                  }
                >
                  <Image
                    src={anime.poster}
                    alt={anime.title}
                    boxSize="full"
                    p={4}
                    rounded="lg"
                    backgroundSize="cover"
                    onClick={() =>
                      Navigate(`/anime/${anime.id}/${anime.judul}`)
                    }
                  />
                </Box>
              ))}
            </Flex>
            <Text
              {...arrowStyles}
              left="0"
              bg="rgba(0, 0, 0, 0.3)"
              borderRadius="50%"
              onClick={handlePrevAnimeSlide}
            >
              &#10094;
            </Text>
            <Text
              {...arrowStyles}
              right="0"
              bg="rgba(0, 0, 0, 0.3)"
              borderRadius="50%"
              onClick={handleNextAnimeSlide}
            >
              &#10095;
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
