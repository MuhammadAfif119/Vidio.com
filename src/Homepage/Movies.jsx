import React, { useEffect, useState } from "react";
import {
  Box,
  Link,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Movie() {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataFilm1, setDataFilm1] = useState([]);
  const [dataFilm2, setDataFilm2] = useState([]);
  const [dataFilm3, setDataFilm3] = useState([]);
  const [dataFilm4, setDataFilm4] = useState([]);
  const [currentFilmSlide, setCurrentFilmSlide] = useState(0);
  const [currentFilm1Slide, setCurrentFilm1Slide] = useState(0);
  const [currentFilm2Slide, setCurrentFilm2Slide] = useState(0);
  const [currentFilm3Slide, setCurrentFilm3Slide] = useState(0);
  const [currentFilm4Slide, setCurrentFilm4Slide] = useState(0);
  const Navigate = useNavigate();

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
      img: "https://thumbor.prod.vidiocdn.com/ibSegRXUIFH_YPx7TbaxWMYrTs0=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8096/anna-0002ea.jpg",
      label: "Anna",
      description: "Feel the freedom of shopping",
      id: "23"
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/6cfpjaIiDcuncANi6HDxkz3EJ90=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/7145/man-on-fire-b7aa90.jpg",
      label: "Man On Fire",
      description: "Advice the best quality of Laptop",
      id: "24"
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/IdvwOlLO9E7KrxBs1hAZsbs-534=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18782/bodyguards-and-assassins-57d7d1.jpg",
      label: "sss",
      description: "Find your best Missile to play",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/sMPHUIpyEtMtoDDJttFjpUsNBZs=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18537/argantara-a6d9f1.jpg",
      label: "ddd",
      description: "Get your best Smartphone",
      id: "4"
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/bS7uXgYsIj4q4mQWdVLEDQre4fk=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18785/wolf-pack-6632d3.jpg",
      label: "xx",
      description: "Feel the fresh of nature",
      id: "2"
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/bIrvIe9XMXe-pRqZx3iFj7ZIQK8=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8093/fury-beabca.jpg",
      label: "fury",
      description: "Feel the fresh of nature",
      id: "7"
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/v_9x3wKovaCjMkLowA_cNEkuoW4=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/4102/headshot-19a4c8.jpg",
      label: "Headshot",
      description: "Feel the freedom of shopping",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

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
      const responseFilm = await axios.get("http://localhost:3080/moviefav");
      setDataFilm(responseFilm.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm([]);
    }
  };

  const fetchDataFilm1 = async () => {
    try {
      const responseFilm1 = await axios.get("http://localhost:3080/movie1");
      setDataFilm1(responseFilm1.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm1([]);
    }
  };

  const fetchDataFilm2 = async () => {
    try {
      const responseFilm2 = await axios.get("http://localhost:3080/movie2");
      setDataFilm2(responseFilm2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm2([]);
    }
  };

  const fetchDataFilm3 = async () => {
    try {
      const responseFilm3 = await axios.get("http://localhost:3080/movie3");
      setDataFilm3(responseFilm3.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm3([]);
    }
  };

  const fetchDataFilm4 = async () => {
    try {
      const responseFilm4 = await axios.get("http://localhost:3080/movie4");
      setDataFilm4(responseFilm4.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataFilm4([]);
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

  const slidesPerFilm1 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalFilm1Slides = Math.ceil(dataFilm1.length / slidesPerFilm1);

  const handlePrevFilm1Slide = () => {
    setCurrentFilm1Slide((prev) => (prev === 0 ? totalFilm1Slides - 1 : prev - 1));
  };

  const handleNextFilm1Slide = () => {
    setCurrentFilm1Slide((prev) => (prev === totalFilm1Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerFilm2 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalFilm2Slides = Math.ceil(dataFilm2.length / slidesPerFilm2);

  const handlePrevFilm2Slide = () => {
    setCurrentFilm2Slide((prev) => (prev === 0 ? totalFilm2Slides - 1 : prev - 1));
  };

  const handleNextFilm2Slide = () => {
    setCurrentFilm2Slide((prev) => (prev === totalFilm2Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerFilm3 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalFilm3Slides = Math.ceil(dataFilm3.length / slidesPerFilm3);

  const handlePrevFilm3Slide = () => {
    setCurrentFilm3Slide((prev) => (prev === 0 ? totalFilm3Slides - 1 : prev - 1));
  };

  const handleNextFilm3Slide = () => {
    setCurrentFilm3Slide((prev) => (prev === totalFilm3Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerFilm4 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalFilm4Slides = Math.ceil(dataFilm4.length / slidesPerFilm4);

  const handlePrevFilm4Slide = () => {
    setCurrentFilm4Slide((prev) => (prev === 0 ? totalFilm4Slides - 1 : prev - 1));
  };

  const handleNextFilm4Slide = () => {
    setCurrentFilm4Slide((prev) => (prev === totalFilm4Slides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    fetchDataFilm();
    fetchDataFilm1();
    fetchDataFilm2();
    fetchDataFilm3();
    fetchDataFilm4();
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
          <Flex h="400px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
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
                  onClick={() => Navigate(`/movie/${slide.id}/${slide.label}`)
                }
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
                    onClick={() => Navigate(`/movie/${slide.id}/${slide.label}`)
                }
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
                  alt={film.title}
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

        {/* Drama */}
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
          Drama
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
            ml={`-${currentFilm1Slide * 210}%`}
          >
            {dataFilm1.map((film1, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentFilm1Slide * slidesPerFilm1 && index < (currentFilm1Slide + 1) * slidesPerFilm1 ? 1 : 0}
                pointerEvents={index >= currentFilm1Slide * slidesPerFilm1 && index < (currentFilm1Slide + 1) * slidesPerFilm1 ? "auto" : "none"}
              >
                <Image
                  src={film1.poster}
                  alt={film1.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/movie/${film1.id}/${film1.judul}`)
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
            onClick={handlePrevFilm1Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextFilm1Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Movie2 */}
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
            ml={`-${currentFilm2Slide * 210}%`}
          >
            {dataFilm2.map((film2, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentFilm2Slide * slidesPerFilm2 && index < (currentFilm2Slide + 1) * slidesPerFilm2 ? 1 : 0}
                pointerEvents={index >= currentFilm2Slide * slidesPerFilm2 && index < (currentFilm2Slide + 1) * slidesPerFilm2 ? "auto" : "none"}
              >
                <Image
                  src={film2.poster}
                  alt={film2.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/movie/${film2.id}/${film2.judul}`)
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
            onClick={handlePrevFilm2Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextFilm2Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Movie3 */}
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
          Action
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
            ml={`-${currentFilm3Slide * 210}%`}
          >
            {dataFilm3.map((film3, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentFilm3Slide * slidesPerFilm3 && index < (currentFilm3Slide + 1) * slidesPerFilm3 ? 1 : 0}
                pointerEvents={index >= currentFilm3Slide * slidesPerFilm3 && index < (currentFilm3Slide + 1) * slidesPerFilm3 ? "auto" : "none"}
              >
                <Image
                  src={film3.poster}
                  alt={film3.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/movie/${film3.id}/${film3.judul}`)
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
            onClick={handlePrevFilm3Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextFilm3Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Movie4 */}
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
          Horror
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
            ml={`-${currentFilm4Slide * 210}%`}
          >
            {dataFilm4.map((film4, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentFilm4Slide * slidesPerFilm4 && index < (currentFilm4Slide + 1) * slidesPerFilm4 ? 1 : 0}
                pointerEvents={index >= currentFilm4Slide * slidesPerFilm4 && index < (currentFilm4Slide + 1) * slidesPerFilm4 ? "auto" : "none"}
              >
                <Image
                  src={film4.poster}
                  alt={film4.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/movie/${film4.id}/${film4.judul}`)
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
            onClick={handlePrevFilm4Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextFilm4Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      </Box>
    </>
  );
}
