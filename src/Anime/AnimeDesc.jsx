import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Card,
    CardBody,
    CardFooter,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { MdLocalShipping } from "react-icons/md";
  import { useParams } from "react-router-dom";
  
  export default function AnimeDesc() {
    const [dataAnime, setDataAnime] = useState([]);
    const [descAnime, setDescAnime] = useState([]);
    const [episodeAnime, setEpisodeAnime] = useState([]);
    const params = useParams();
  
    const desc = params.id;
  
    const fetchDataAnime = async () => {
      if (params && params.id) {
        try {
          const responseAnime = await axios.get(
            `http://localhost:3080/anime/${params.id}`
          );
  
          if (responseAnime.data) {
            console.log("Data:", responseAnime.data);
            setDataAnime(responseAnime.data);
          } else {
            console.log("Tidak ada data!");
            setDataAnime([]);
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
          setDataAnime([]);
        }
      } else {
        console.log("Parameter tidak valid atau judul tidak ada");
      }
    };
  
    const fetchDescAnime = async () => {
      if (params && params.id) {
        try {
          const responseDesc = await axios.get(
            `http://localhost:3080/descritionanime/${params.id}`
          );
  
          if (responseDesc.data) {
            console.log("Data:", responseDesc.data);
            setDescAnime(responseDesc.data);
          } else {
            console.log("Tidak ada data!");
            setDescAnime([]);
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
          setDescAnime([]);
        }
      } else {
        console.log("Parameter tidak valid atau judul tidak ada");
      }
    };
  
    const fetchEpisodeAnime = async () => {
      if (params && params.id) {
        try {
          const responseEpisode = await axios.get(
            `http://localhost:3080/episode1/${params.id}`
          );
  
          if (responseEpisode.data) {
            console.log("Data:", responseEpisode.data);
            setEpisodeAnime(responseEpisode.data);
          } else {
            console.log("Tidak ada data!");
            setEpisodeAnime([]);
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data:", error);
          setEpisodeAnime([]);
        }
      } else {
        console.log("Parameter tidak valid atau judul tidak ada");
      }
    };
  
    console.log(descAnime, "nn");
    console.log(desc, "ll");
    console.log(dataAnime, "hhh");
    console.log(params.id, "param");
    console.log(episodeAnime,"aaa")
    useEffect(() => {
      fetchDataAnime();
      fetchDescAnime();
      fetchEpisodeAnime();
    }, []);
  
    return (
      <>
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                alt={"product image"}
                src={dataAnime.poster}
                align={"center"}
                boxSize="auto"
                shadow="md"
                h="auto"
                w="auto"
                boxSize="full"
                rounded="lg"
                backgroundSize="cover"
                marginLeft={"70px"}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {dataAnime.judul}
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                  fontWeight="bold"
                >
                  IMBD {descAnime.rating}/10
                </Text>
              </Box>
  
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"}>{dataAnime.descriptions}</Text>
                </VStack>
  
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Movie Descriptions
                  </Text>
  
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Episode:
                      </Text>{" "}
                      {descAnime.jumlah_episode}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Director:
                      </Text>{" "}
                      {descAnime.karya}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Studio:
                      </Text>{" "}
                      {descAnime.studio}
                    </ListItem>
                  </List>
                </Box>
              </Stack>
  
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Tonton Sekarang
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
        <Flex
          marginLeft="20px"
          marginTop="50px"
          justifyContent="center"
          p={4}
          pos="relative"
          overflow="hidden"
        >
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
              {episodeAnime.map((episode, index) => (
                <Box key={index} boxShadow="lg" rounded="lg" overflow="hidden">
                  <>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src={episode.poster}
                      alt="Episode Poster"
                    />
                    <Stack>
                      <CardBody>
                        <Heading size="md">{episode.judul}</Heading>
                      </CardBody>
  
                      <CardFooter>
                        <Button 
                        colorScheme="gray"
                        _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}>
                          Tonton Sekarang
                        </Button>
                      </CardFooter>
                    </Stack>
                  </>
                </Box>
              ))}
            </SimpleGrid>
          </Card>
        </Flex>
      </>
    );
  }
  