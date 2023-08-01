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

export default function Sport() {
  
  const [dataSport, setDataSport] = useState([]);
  const [dataSport1, setDataSport1] = useState([]);
  const [dataSport2, setDataSport2] = useState([]);
  const [dataSport3, setDataSport3] = useState([]);
  const [dataSport4, setDataSport4] = useState([]);
  const [currentSportSlide, setCurrentSportSlide] = useState(0);
  const [currentSport1Slide, setCurrentSport1Slide] = useState(0);
  const [currentSport2Slide, setCurrentSport2Slide] = useState(0);
  const [currentSport3Slide, setCurrentSport3Slide] = useState(0);
  const [currentSport4Slide, setCurrentSport4Slide] = useState(0);
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
      img: "https://thumbor.prod.vidiocdn.com/mk2VOUV85J_HaBbnEB-TdhnAGqA=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/8323/psis-semarang-vs-borneo-fc-b3fd41.jpg",
      label: "sss",
      description: "Feel the freedom of shopping",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/K0IRRYW5jdbN4cHd7Q8N4i_s5Rc=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/9981/persikabo-1973-vs-persita-e4607b.jpg",
      label: "aaa",
      description: "Advice the best quality of Laptop",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/6RbqYhHD0-LW2DtdP1XIv_VHBy0=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18872/vietnam-vs-indonesia-ac259f.jpg",
      label: "sss",
      description: "Find your best Missile to play",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/a43Rv9urePEpUZS6SbzRRVjsEMQ=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18873/philippines-vs-thailand-1ee9d1.jpg",
      label: "ddd",
      description: "Get your best Smartphone",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/9WjmT1NI2Dj4UKTiu5OGYn6hMvQ=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/3937/vidio-gaming-live-6b9126.jpg",
      label: "xx",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/DjLaIZ3vUQM_-oqUg9_BeeIIHuw=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/17357/newcastle-vs-chelsea-5e2bce.jpg",
      label: "aa",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/ybZjBRjO4ZMgfpTILhARkpXIHM4=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/14441/persik-kediri-vs-persib-bandung-46cfb5.jpg",
      label: "sss",
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

  const fetchDataSport1 = async () => {
    try {
      const responseSport1 = await axios.get("http://localhost:3080/sport1");
      setDataSport1(responseSport1.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSport1([]);
    }
  };

  const fetchDataSport2 = async () => {
    try {
      const responseSport2 = await axios.get("http://localhost:3080/sport2");
      setDataSport2(responseSport2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSport2([]);
    }
  };

  const fetchDataSport3 = async () => {
    try {
      const responseSport3 = await axios.get("http://localhost:3080/sport3");
      setDataSport3(responseSport3.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSport3([]);
    }
  };

  const fetchDataSport4 = async () => {
    try {
      const responseSport4 = await axios.get("http://localhost:3080/sport4");
      setDataSport4(responseSport4.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSport4([]);
    }
  };

  const fetchDataSport = async () => {
    try {
      const responseSport = await axios.get("http://localhost:3080/sportfav");
      setDataSport(responseSport.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSport([]);
    }
  };

  const slidesPerSport = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSportSlides = Math.ceil(dataSport.length / slidesPerSport);

  const handlePrevSportSlide = () => {
    setCurrentSportSlide((prev) => (prev === 0 ? totalSportSlides - 1 : prev - 1));
  };

  const handleNextSportSlide = () => {
    setCurrentSportSlide((prev) => (prev === totalSportSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerSport1 = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSport1Slides = Math.ceil(dataSport1.length / slidesPerSport1);

  const handlePrevSport1Slide = () => {
    setCurrentSport1Slide((prev) => (prev === 0 ? totalSport1Slides - 1 : prev - 1));
  };

  const handleNextSport1Slide = () => {
    setCurrentSport1Slide((prev) => (prev === totalSport1Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerSport2 = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSport2Slides = Math.ceil(dataSport2.length / slidesPerSport2);

  const handlePrevSport2Slide = () => {
    setCurrentSport2Slide((prev) => (prev === 0 ? totalSport2Slides - 1 : prev - 1));
  };

  const handleNextSport2Slide = () => {
    setCurrentSport2Slide((prev) => (prev === totalSport2Slides - 1 ? 0 : prev + 1));
  };
  const slidesPerSport3 = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSport3Slides = Math.ceil(dataSport3.length / slidesPerSport3);

  const handlePrevSport3Slide = () => {
    setCurrentSport3Slide((prev) => (prev === 0 ? totalSport3Slides - 1 : prev - 1));
  };

  const handleNextSport3Slide = () => {
    setCurrentSport3Slide((prev) => (prev === totalSport3Slides - 1 ? 0 : prev + 1));
  };
  const slidesPerSport4 = 4; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSport4Slides = Math.ceil(dataSport4.length / slidesPerSport4);

  const handlePrevSport4Slide = () => {
    setCurrentSport4Slide((prev) => (prev === 0 ? totalSport4Slides - 1 : prev - 1));
  };

  const handleNextSport4Slide = () => {
    setCurrentSport4Slide((prev) => (prev === totalSport4Slides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    fetchDataSport();
    fetchDataSport1();
    fetchDataSport2();
    fetchDataSport3();
    fetchDataSport4();
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

        {/* Sport1 */}
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
          Footbal
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
            ml={`-${currentSport1Slide * 225}%`}
          >
            {dataSport1.map((sport1, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSport1Slide * slidesPerSport1 && index < (currentSport1Slide + 1) * slidesPerSport1 ? 1 : 0}
                pointerEvents={index >= currentSport1Slide * slidesPerSport1 && index < (currentSport1Slide + 1) * slidesPerSport1 ? "auto" : "none"}
              >
                <Image
                  src={sport1.poster}
                  alt={sport1.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                  onClick={() => Navigate(`/sport/${sport1.id}/${sport1.judul}`)
                }
                />
                <Text
                w="300px"
                marginLeft={"10px"}>{sport1.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevSport1Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSport1Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Sport2 */}
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
          Volley
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
            ml={`-${currentSport2Slide * 225}%`}
          >
            {dataSport2.map((sport2, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSport2Slide * slidesPerSport2 && index < (currentSport2Slide + 1) * slidesPerSport2 ? 1 : 0}
                pointerEvents={index >= currentSport2Slide * slidesPerSport2 && index < (currentSport2Slide + 1) * slidesPerSport2 ? "auto" : "none"}
              >
                <Image
                  src={sport2.poster}
                  alt={sport2.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                  onClick={() => Navigate(`/sport/${sport2.id}/${sport2.judul}`)
                }
                />
                <Text
                w="300px"
                marginLeft={"10px"}>{sport2.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevSport2Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSport2Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Sport3 */}
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
          MPL
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
            ml={`-${currentSport3Slide * 225}%`}
          >
            {dataSport3.map((sport3, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSport3Slide * slidesPerSport3 && index < (currentSport3Slide + 1) * slidesPerSport3 ? 1 : 0}
                pointerEvents={index >= currentSport3Slide * slidesPerSport3 && index < (currentSport3Slide + 1) * slidesPerSport3 ? "auto" : "none"}
              >
                <Image
                  src={sport3.poster}
                  alt={sport3.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                  onClick={() => Navigate(`/sport/${sport3.id}/${sport3.judul}`)
                }
                />
                <Text
                w="300px"
                marginLeft={"10px"}>{sport3.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevSport3Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSport3Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Sport4 */}
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
          BRI Liga 1
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
            ml={`-${currentSport4Slide * 225}%`}
          >
            {dataSport4.map((sport4, index) => (
              <Box
                key={index}
                h="300px"
                w="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSport4Slide * slidesPerSport4 && index < (currentSport4Slide + 1) * slidesPerSport4 ? 1 : 0}
                pointerEvents={index >= currentSport4Slide * slidesPerSport4 && index < (currentSport4Slide + 1) * slidesPerSport4 ? "auto" : "none"}
              >
                <Image
                  src={sport4.poster}
                  alt={sport4.title}
                  boxSize="auto"
                  p={4}
                  backgroundSize="cover"
                  onClick={() => Navigate(`/sport/${sport4.id}/${sport4.judul}`)
                }
                />
                <Text
                w="300px"
                marginLeft={"10px"}>{sport4.judul}</Text>
              </Box>
            ))}
          </Flex>
          <Text
            {...arrowStyles}
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handlePrevSport4Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSport4Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      </Box>
    </>
  );
}
