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

export default function Anime() {
  const [dataAnime, setDataAnime] = useState([]);
  const [dataAnime1, setDataAnime1] = useState([]);
  const [dataAnime2, setDataAnime2] = useState([]);
  const [dataAnime3, setDataAnime3] = useState([]);
  const [dataAnime4, setDataAnime4] = useState([]);
  const [currentAnime1Slide, setCurrentAnime1Slide] = useState(0);
  const [currentAnime2Slide, setCurrentAnime2Slide] = useState(0);
  const [currentAnime3Slide, setCurrentAnime3Slide] = useState(0);
  const [currentAnime4Slide, setCurrentAnime4Slide] = useState(0);
  const [currentAnimeSlide, setCurrentAnimeSlide] = useState(0);
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
      img: "https://thumbor.prod.vidiocdn.com/C4gDqKUAw9RDIK0dYeTkDZbYGt8=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18698/bleach-thousand-year-blood-war-f79735.jpg",
      label: "Blech",
      description: "Feel the freedom of shopping",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/xeHA6YOFpj8bQABUW3LmKqNRdbE=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18683/jujutsu-kaisen-season-2-932daf.jpg",
      label: "man on fire",
      description: "Advice the best quality of Laptop",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/D1ewuXj-vLWF3xMdWGCEQesy450=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18659/mushoku-tensei-season-2-1fb8f3.jpg",
      label: "mashakou tensei 2",
      description: "Find your best Missile to play",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/e8tHW7GOOHEqh8l13c0bugb8dSM=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/8976/one-piece-466f30.jpg",
      label: "ddd",
      description: "Get your best Smartphone",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/Fzeo2utawPL80L1_P_MDaUgmX70=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18852/tokyo-ghoul-season-2-5f5839.jpg",
      label: "xx",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/Ji-OgU_oTQmAWvPJH3PPYyMqBG8=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/15458/naruto-shippuden-297fc5.jpg",
      label: "fury",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/5lt8xytu7clETav5qu9Xkglqh5M=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/9284/doraemon-the-movie-2019-9c073a.jpg",
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

  const fetchDataAnime = async () => {
    try {
      const responseAnime = await axios.get("http://localhost:3080/animefav");
      setDataAnime(responseAnime.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime([]);
    }
  };

  const fetchDataAnime1 = async () => {
    try {
      const responseAnime1 = await axios.get("http://localhost:3080/anime1");
      setDataAnime1(responseAnime1.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime1([]);
    }
  };

  const fetchDataAnime2 = async () => {
    try {
      const responseAnime2 = await axios.get("http://localhost:3080/anime3");
      setDataAnime2(responseAnime2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime2([]);
    }
  };

  const fetchDataAnime3 = async () => {
    try {
      const responseAnime3 = await axios.get("http://localhost:3080/anime2");
      setDataAnime3(responseAnime3.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime3([]);
    }
  };

  const fetchDataAnime4 = async () => {
    try {
      const responseAnime4 = await axios.get("http://localhost:3080/anime4");
      setDataAnime4(responseAnime4.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataAnime4([]);
    }
  };

  const slidesPerAnime = 7; // Jumlah slide Anime yang ditampilkan dalam satu waktu
  const totalAnimeSlides = Math.ceil(dataAnime.length / slidesPerAnime);

  const handlePrevAnimeSlide = () => {
    setCurrentAnimeSlide((prev) => (prev === 0 ? totalAnimeSlides - 1 : prev - 1));
  };

  const handleNextAnimeSlide = () => {
    setCurrentAnimeSlide((prev) => (prev === totalAnimeSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerAnime1 = 7; // Jumlah slide Anime yang ditampilkan dalam satu waktu
  const totalAnime1Slides = Math.ceil(dataAnime1.length / slidesPerAnime1);

  const handlePrevAnime1Slide = () => {
    setCurrentAnime1Slide((prev) => (prev === 0 ? totalAnime1Slides - 1 : prev - 1));
  };

  const handleNextAnime1Slide = () => {
    setCurrentAnime1Slide((prev) => (prev === totalAnime1Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerAnime2 = 7; // Jumlah slide Anime yang ditampilkan dalam satu waktu
  const totalAnime2Slides = Math.ceil(dataAnime2.length / slidesPerAnime2);

  const handlePrevAnime2Slide = () => {
    setCurrentAnime2Slide((prev) => (prev === 0 ? totalAnime2Slides - 1 : prev - 1));
  };

  const handleNextAnime2Slide = () => {
    setCurrentAnime2Slide((prev) => (prev === totalAnime2Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerAnime3 = 7; // Jumlah slide Anime yang ditampilkan dalam satu waktu
  const totalAnime3Slides = Math.ceil(dataAnime3.length / slidesPerAnime3);

  const handlePrevAnime3Slide = () => {
    setCurrentAnime3Slide((prev) => (prev === 0 ? totalAnime3Slides - 1 : prev - 1));
  };

  const handleNextAnime3Slide = () => {
    setCurrentAnime3Slide((prev) => (prev === totalAnime3Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerAnime4 = 7; // Jumlah slide Anime yang ditampilkan dalam satu waktu
  const totalAnime4Slides = Math.ceil(dataAnime4.length / slidesPerAnime4);

  const handlePrevAnime4Slide = () => {
    setCurrentAnime4Slide((prev) => (prev === 0 ? totalAnime4Slides - 1 : prev - 1));
  };

  const handleNextAnime4Slide = () => {
    setCurrentAnime4Slide((prev) => (prev === totalAnime4Slides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    fetchDataAnime();
    fetchDataAnime1();
    fetchDataAnime2();
    fetchDataAnime3();
    fetchDataAnime4();
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
            {dataAnime.map((Anime, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentAnimeSlide * slidesPerAnime && index < (currentAnimeSlide + 1) * slidesPerAnime ? 1 : 0}
                pointerEvents={index >= currentAnimeSlide * slidesPerAnime && index < (currentAnimeSlide + 1) * slidesPerAnime ? "auto" : "none"}
              >
                <Image
                  src={Anime.poster}
                  alt={Anime.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/anime/${Anime.id}/${Anime.judul}`)
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
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Adventure */}
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
          Adventure
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
            ml={`-${currentAnime1Slide * 210}%`}
          >
            {dataAnime1.map((Anime1, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentAnime1Slide * slidesPerAnime1 && index < (currentAnime1Slide + 1) * slidesPerAnime1 ? 1 : 0}
                pointerEvents={index >= currentAnime1Slide * slidesPerAnime1 && index < (currentAnime1Slide + 1) * slidesPerAnime1 ? "auto" : "none"}
              >
                <Image
                  src={Anime1.poster}
                  alt={Anime1.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/anime/${Anime1.id}/${Anime1.judul}`)
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
            onClick={handlePrevAnime1Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextAnime1Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Anime2 */}
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
          Demon
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
            ml={`-${currentAnime2Slide * 210}%`}
          >
            {dataAnime2.map((Anime2, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentAnime2Slide * slidesPerAnime2 && index < (currentAnime2Slide + 1) * slidesPerAnime2 ? 1 : 0}
                pointerEvents={index >= currentAnime2Slide * slidesPerAnime2 && index < (currentAnime2Slide + 1) * slidesPerAnime2 ? "auto" : "none"}
              >
                <Image
                  src={Anime2.poster}
                  alt={Anime2.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/anime/${Anime2.id}/${Anime2.judul}`)
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
            onClick={handlePrevAnime2Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextAnime2Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Anime3 */}
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
          Sword
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
            ml={`-${currentAnime3Slide * 210}%`}
          >
            {dataAnime3.map((Anime3, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentAnime3Slide * slidesPerAnime3 && index < (currentAnime3Slide + 1) * slidesPerAnime3 ? 1 : 0}
                pointerEvents={index >= currentAnime3Slide * slidesPerAnime3 && index < (currentAnime3Slide + 1) * slidesPerAnime3 ? "auto" : "none"}
              >
                <Image
                  src={Anime3.poster}
                  alt={Anime3.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/anime/${Anime3.id}/${Anime3.judul}`)
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
            onClick={handlePrevAnime3Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextAnime3Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Anime4 */}
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
          Shounen
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
            ml={`-${currentAnime4Slide * 210}%`}
          >
            {dataAnime4.map((Anime4, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentAnime4Slide * slidesPerAnime4 && index < (currentAnime4Slide + 1) * slidesPerAnime4 ? 1 : 0}
                pointerEvents={index >= currentAnime4Slide * slidesPerAnime4 && index < (currentAnime4Slide + 1) * slidesPerAnime4 ? "auto" : "none"}
              >
                <Image
                  src={Anime4.poster}
                  alt={Anime4.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/anime/${Anime4.id}/${Anime4.judul}`)
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
            onClick={handlePrevAnime4Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextAnime4Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      </Box>
    </>
  );
}
