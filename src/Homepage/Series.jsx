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

export default function Series() {
  const [dataSeries, setDataSeries] = useState([]);
  const [dataSeries1, setDataSeries1] = useState([]);
  const [dataSeries2, setDataSeries2] = useState([]);
  const [dataSeries3, setDataSeries3] = useState([]);
  const [dataSeries4, setDataSeries4] = useState([]);
  const [currentSeriesSlide, setCurrentSeriesSlide] = useState(0);
  const [currentSeries1Slide, setCurrentSeries1Slide] = useState(0);
  const [currentSeries2Slide, setCurrentSeries2Slide] = useState(0);
  const [currentSeries3Slide, setCurrentSeries3Slide] = useState(0);
  const [currentSeries4Slide, setCurrentSeries4Slide] = useState(0);
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
      img: "https://thumbor.prod.vidiocdn.com/uqfHrtzIdwJmJ6RvI7dtJi7sMuU=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8405/miraculous-brothers-b9adf5.jpg",
      label: "Miraculous Brother",
      description: "Feel the freedom of shopping",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/7Hcp_7TGm2iQ7ETe2NDD16Yuzac=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18687/the-bride-of-habaek-67d1af.jpg",
      label: "The Bride of Habaek",
      description: "Advice the best quality of Laptop",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/YW5ZGkLLo0Tx55dMXnnmi3N6gC0=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8327/agency-8b269f.jpg",
      label: "Agency",
      description: "Find your best Missile to play",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/_RYoQgJoI1ejRBbmlq7HgybypUw=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8171/home-school-de3ebe.jpg",
      label: "Home School",
      description: "Get your best Smartphone",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/HtnLjLUTrzs9d_VitBMVbmuZRIs=/2672x960/filters:quality(75)/vidio-web-prod-headline/uploads/headline/premium_image/18875/meet-yourself-0e97d7.jpg",
      label: "Meet Yourself",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/LAzcWOkD8RQWRT5QXYOMJaZpZaI=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/8280/cinta-dua-masa-99246c.jpg",
      label: "Cinta dua masa",
      description: "Feel the fresh of nature",
    },
    {
      img: "https://thumbor.prod.vidiocdn.com/eIytxcfDPPCSE54eor3LvtyetO0=/2672x960/filters:quality(75)/vidio-web-prod-film/uploads/film/desktop_headline_image/2248/turn-on-ff150a.jpg",
      label: "Turn On",
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

  const fetchDataSeries = async () => {
    try {
      const responseSeries = await axios.get("http://localhost:3080/seriesfav");
      setDataSeries(responseSeries.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries([]);
    }
  };

  const fetchDataSeries1 = async () => {
    try {
      const responseSeries1 = await axios.get("http://localhost:3080/series1");
      setDataSeries1(responseSeries1.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries1([]);
    }
  };

  const fetchDataSeries2 = async () => {
    try {
      const responseSeries2 = await axios.get("http://localhost:3080/series2");
      setDataSeries2(responseSeries2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries2([]);
    }
  };

  const fetchDataSeries3 = async () => {
    try {
      const responseSeries3 = await axios.get("http://localhost:3080/series3");
      setDataSeries3(responseSeries3.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries3([]);
    }
  };

  const fetchDataSeries4 = async () => {
    try {
      const responseSeries4 = await axios.get("http://localhost:3080/series4");
      setDataSeries4(responseSeries4.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataSeries4([]);
    }
  };

  const slidesPerSeries = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeriesSlides = Math.ceil(dataSeries.length / slidesPerSeries);

  const handlePrevSeriesSlide = () => {
    setCurrentSeriesSlide((prev) => (prev === 0 ? totalSeriesSlides - 1 : prev - 1));
  };

  const handleNextSeriesSlide = () => {
    setCurrentSeriesSlide((prev) => (prev === totalSeriesSlides - 1 ? 0 : prev + 1));
  };

  const slidesPerSeries1 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeries1Slides = Math.ceil(dataSeries1.length / slidesPerSeries1);

  const handlePrevSeries1Slide = () => {
    setCurrentSeries1Slide((prev) => (prev === 0 ? totalSeries1Slides - 1 : prev - 1));
  };

  const handleNextSeries1Slide = () => {
    setCurrentSeries1Slide((prev) => (prev === totalSeries1Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerSeries2 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeries2Slides = Math.ceil(dataSeries2.length / slidesPerSeries2);

  const handlePrevSeries2Slide = () => {
    setCurrentSeries2Slide((prev) => (prev === 0 ? totalSeries2Slides - 1 : prev - 1));
  };

  const handleNextSeries2Slide = () => {
    setCurrentSeries2Slide((prev) => (prev === totalSeries2Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerSeries3 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeries3Slides = Math.ceil(dataSeries3.length / slidesPerSeries3);

  const handlePrevSeries3Slide = () => {
    setCurrentSeries3Slide((prev) => (prev === 0 ? totalSeries3Slides - 1 : prev - 1));
  };

  const handleNextSeries3Slide = () => {
    setCurrentSeries3Slide((prev) => (prev === totalSeries3Slides - 1 ? 0 : prev + 1));
  };

  const slidesPerSeries4 = 7; // Jumlah slide film yang ditampilkan dalam satu waktu
  const totalSeries4Slides = Math.ceil(dataSeries.length / slidesPerSeries);

  const handlePrevSeries4Slide = () => {
    setCurrentSeries4Slide((prev) => (prev === 0 ? totalSeries4Slides - 1 : prev - 1));
  };

  const handleNextSeries4Slide = () => {
    setCurrentSeries4Slide((prev) => (prev === totalSeries4Slides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    fetchDataSeries();
   fetchDataSeries1();
   fetchDataSeries2();
   fetchDataSeries3();
   fetchDataSeries4();
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

        {/* Kriminal */}
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
          Kriminal
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
            ml={`-${currentSeries1Slide * 210}%`}
          >
            {dataSeries1.map((series1, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSeries1Slide * slidesPerSeries1 && index < (currentSeries1Slide + 1) * slidesPerSeries1 ? 1 : 0}
                pointerEvents={index >= currentSeries1Slide * slidesPerSeries1 && index < (currentSeries1Slide + 1) * slidesPerSeries1 ? "auto" : "none"}
              >
                <Image
                  src={series1.poster}
                  alt={series1.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/series/${series1.id}/${series1.judul}`)
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
            onClick={handlePrevSeries1Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSeries1Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Series2 */}
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
          Mdeical Drama
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
            ml={`-${currentSeries2Slide * 210}%`}
          >
            {dataSeries2.map((series2, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSeries2Slide * slidesPerSeries2 && index < (currentSeries2Slide + 1) * slidesPerSeries2 ? 1 : 0}
                pointerEvents={index >= currentSeries2Slide * slidesPerSeries2 && index < (currentSeries2Slide + 1) * slidesPerSeries2 ? "auto" : "none"}
              >
                <Image
                  src={series2.poster}
                  alt={series2.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/series/${series2.id}/${series2.judul}`)
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
            onClick={handlePrevSeries2Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSeries2Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Series3 */}
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
          Historical Drama
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
            ml={`-${currentSeries3Slide * 210}%`}
          >
            {dataSeries3.map((series3, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSeries3Slide * slidesPerSeries3 && index < (currentSeries3Slide + 1) * slidesPerSeries3 ? 1 : 0}
                pointerEvents={index >= currentSeries3Slide * slidesPerSeries3 && index < (currentSeries3Slide + 1) * slidesPerSeries3 ? "auto" : "none"}
              >
                <Image
                  src={series3.poster}
                  alt={series3.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/series/${series3.id}/${series3.judul}`)
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
            onClick={handlePrevSeries3Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSeries3Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      <Box bg="#edf3f8">
        {/* Carousel */}
        {/* ... Previous carousel code ... */}

        {/* Series4 */}
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
          Romance Comedy
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
            ml={`-${currentSeries4Slide * 210}%`}
          >
            {dataSeries4.map((series4, index) => (
              <Box
                key={index}
                boxSize="auto"
                shadow="md"
                flex="none"
                opacity={index >= currentSeries4Slide * slidesPerSeries4 && index < (currentSeries4Slide + 1) * slidesPerSeries4 ? 1 : 0}
                pointerEvents={index >= currentSeries4Slide * slidesPerSeries4 && index < (currentSeries4Slide + 1) * slidesPerSeries4 ? "auto" : "none"}
              >
                <Image
                  src={series4.poster}
                  alt={series4.title}
                  boxSize="full"
                  p={4}
                  rounded="lg"
                  backgroundSize="cover"
                  onClick={() => Navigate(`/series/${series4.id}/${series4.judul}`)
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
            onClick={handlePrevSeries4Slide}
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            onClick={handleNextSeries4Slide}
          >
            &#10095;
          </Text>
        </Flex>
      </Box>
      </Box>
    </>
  );
}
