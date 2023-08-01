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
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataSport, setDataSport] = useState([]);
  const [dataNews, setDataNews] = useState([]);
  const [dataSeries, setDataSeries] = useState([]);
  const [dataEnterteinment, setDataEnterteinment] = useState([]);
  const [currentFilmSlide, setCurrentFilmSlide] = useState(0);
  const [currentSportSlide, setCurrentSportSlide] = useState(0);
  const [currentSeriesSlide, setCurrentSeriesSlide] = useState(0);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [currentEnterteinmentSlide, setCurrentEnterteinmentSlide] = useState(0);
  const Navigate = useNavigate(0);

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

  const slides = [
    {
      img: "https://thumbor.prod.vidiocdn.com/X97dyoLw5mUoPvSBvd_WCKwlJAk=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8170/tokyo-ghoul-1c79df.jpg",
      label: "sss",
      description: "Feel the freedom of shopping",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/bS7uXgYsIj4q4mQWdVLEDQre4fk=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18785/wolf-pack-6632d3.jpg",
      label: "aaa",
      description: "Advice the best quality of Laptop",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/gcfC4S7pTOvJr7pPEzOAyHg7jMI=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/13339/petualangan-seru-doraemon-da4b52.jpg",
      label: "sss",
      description: "Find your best Missile to play",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/_RYoQgJoI1ejRBbmlq7HgybypUw=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8171/home-school-de3ebe.jpg",
      label: "ddd",
      description: "Get your best Smartphone",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/ZLVURZpkPC_PgtyXZXraQeVkxgI=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/9970/lfctv-aaedb0.jpg",
      label: "xx",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/DjLaIZ3vUQM_-oqUg9_BeeIIHuw=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/17357/newcastle-vs-chelsea-5e2bce.jpg",
      label: "aa",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/3nS-DgQb5VqXkVeh6JQguNg9RKg=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/3749/jujutsu-kaisen-3f4b05.jpg",
      label: "sss",
      description: "Feel the freedom of shopping",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const handleNavigate = () => {
    try{
    Navigate(`/movie/${dataFilm.judul}`);
    } catch(error){
      console.log(error)
    }
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const fetchDataFilm = async () => {
    try {
      const responseFilm = await axios.get("http://localhost:3080/film");
      setDataFilm(responseFilm.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm([]);
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

  const fetchDataNews = async () => {
    try {
      const responseNews = await axios.get("http://localhost:3080/news");
      setDataNews(responseNews.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataNews([]);
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

  const fetchDataEnterteinment = async () => {
    try {
      const responseEnterteinment = await axios.get("http://localhost:3080/enterteinment");
      setDataEnterteinment(responseEnterteinment.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataEnterteinment([]);
    }
  };

  const slidesPerFilm = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalFilmSlides = Math.ceil(dataFilm.length / slidesPerFilm);

  const handlePrevFilmSlide = () => {
    setCurrentFilmSlide((prev) => (prev === 0 ? totalFilmSlides - 1 : prev - 1));
  };

  const handleNextFilmSlide = () => {
    setCurrentFilmSlide((prev) => (prev === totalFilmSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerSport = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSportSlides = Math.ceil(dataSport.length / slidesPerSport);

  const handlePrevSportSlide = () => {
    setCurrentSportSlide((prev) => (prev === 0 ? totalSportSlides - 1 : prev - 1));
  };

  const handleNextSportSlide = () => {
    setCurrentSportSlide((prev) => (prev === totalSportSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerSeries = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeriesSlides = Math.ceil(dataSeries.length / slidesPerSeries);

  const handlePrevSeriesSlide = () => {
    setCurrentSeriesSlide((prev) => (prev === 0 ? totalSeriesSlides - 1 : prev - 1));
  };

  const handleNextSeriesSlide = () => {
    setCurrentSeriesSlide((prev) => (prev === totalSeriesSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerNews = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalNewsSlides = Math.ceil(dataNews.length / slidesPerNews);

  const handlePrevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev === 0 ? totalNewsSlides - 1 : prev - 1));
  };

  const handleNextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev === totalNewsSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerEnterteinment = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalEnterteinmentSlides = Math.ceil(dataEnterteinment.length / slidesPerEnterteinment);

  const handlePrevEnterteinmentSlide = () => {
    setCurrentEnterteinmentSlide((prev) => (prev === 0 ? totalEnterteinmentSlides - 1 : prev - 1));
  };

  const handleNextEnterteinmentSlide = () => {
    setCurrentEnterteinmentSlide((prev) => (prev === totalEnterteinmentSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    fetchDataFilm();
    fetchDataSport();
    fetchDataNews();
    fetchDataSeries();
    fetchDataEnterteinment();
  }, []);

  return (
    <>
    <Box
    bg="#edf3f8">
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" pos="relative" overflow="hidden">
          <Flex h="400px" w="full" {...carouselStyle} >
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none" >
                <Text
                  color="black"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
                <Stack
                  p="8px 12px"
                  pos="absolute"
                  bottom="100px"
                  textAlign="left"
                  w="full"
                  mb="8"
                  color="white"
                >
                  <Text
                    fontSize="2xl"
                    marginTop="150px"
                    fontWeight="bold"
                    marginLeft="30px"
                  >
                    {slide.label}
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" marginLeft="30px">
                    {slide.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
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
                opacity={index >= currentFilmSlide * slidesPerFilm && index < (currentFilmSlide + 1) * slidesPerFilm ? 1 : 0}
                pointerEvents={index >= currentFilmSlide * slidesPerFilm && index < (currentFilmSlide + 1) * slidesPerFilm ? "auto" : "none"}
              >
                <Image
                  src={film.poster}
                  alt={film.judul}
                  value={film.id}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/movie/${film.id}/${film.judul}`)
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

        {/* Sport */}
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
          Pertandingan Minggu ini
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
            ml={`-${currentSportSlide * 225}%`}
          >
            {dataSport.map((sport, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSportSlide * slidesPerSport && index < (currentSportSlide + 1) * slidesPerSport ? 1 : 0}
                pointerEvents={index >= currentSportSlide * slidesPerSport && index < (currentSportSlide + 1) * slidesPerSport ? "auto" : "none"}
              >
                <Image
                  src={sport.poster}
                  alt={sport.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                  onClick={() => Navigate(`/sport/${sport.id}/${sport.judul}`)
                }
                />
                <Text
                w="300px"
                marginLeft={"10px"}>{sport.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevSportSlide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSportSlide}
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
                opacity={index >= currentSeriesSlide * slidesPerSeries && index < (currentSeriesSlide + 1) * slidesPerSeries ? 1 : 0}
                pointerEvents={index >= currentSeriesSlide * slidesPerSeries && index < (currentSeriesSlide + 1) * slidesPerSeries ? "auto" : "none"}
              >
                <Image
                  src={series.poster}
                  alt={series.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/series/${series.id}/${series.judul}`)
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

        {/* News */}
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
          News
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
            ml={`-${currentNewsSlide * 225}%`}
          >
            {dataNews.map((news, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentNewsSlide * slidesPerNews && index < (currentNewsSlide + 1) * slidesPerNews ? 1 : 0}
                pointerEvents={index >= currentNewsSlide * slidesPerNews && index < (currentNewsSlide + 1) * slidesPerNews ? "auto" : "none"}
              >
                <Image
                  src={news.poster}
                  alt={news.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                />
                <Text
                w="400px"
                marginLeft={"10px"}>{news.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevNewsSlide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextNewsSlide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Enterteinment */}
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
          Enterteinment
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
            ml={`-${currentEnterteinmentSlide * 225}%`}
          >
            {dataEnterteinment.map((Enterteinment, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentEnterteinmentSlide * slidesPerEnterteinment && index < (currentEnterteinmentSlide + 1) * slidesPerNews ? 1 : 0}
                pointerEvents={index >= currentEnterteinmentSlide * slidesPerEnterteinment && index < (currentEnterteinmentSlide + 1) * slidesPerNews ? "auto" : "none"}
              >
                <Image
                  src={Enterteinment.poster}
                  alt={Enterteinment.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                />
                <Text
                w="400px"
                marginLeft={"10px"}>{Enterteinment.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevEnterteinmentSlide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextEnterteinmentSlide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      </Box>
    </>
  );
}
