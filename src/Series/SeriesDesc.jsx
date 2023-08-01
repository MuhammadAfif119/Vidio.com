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
import { useNavigate, useParams } from "react-router-dom";

export default function SeriesDesc() {
  const [dataSeries, setDataSeries] = useState([]);
  const [descSeries, setDescSeries] = useState([]);
  const [episodeSeries, setEpisodeSeries] = useState([]);
  const params = useParams();
  const Navigate = useNavigate();

  const desc = params.id;

  const fetchDataSeries = async () => {
    if (params && params.id) {
      try {
        const responseSeries = await axios.get(
          `http://localhost:3080/series/${params.id}`
        );

        if (responseSeries.data) {
          console.log("Data:", responseSeries.data);
          setDataSeries(responseSeries.data);
        } else {
          console.log("Tidak ada data!");
          setDataSeries([]);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setDataSeries([]);
      }
    } else {
      console.log("Parameter tidak valid atau judul tidak ada");
    }
  };

  const fetchDescSeries = async () => {
    if (params && params.id) {
      try {
        const responseDesc = await axios.get(
          `http://localhost:3080/descriptionseries/${params.id}`
        );

        if (responseDesc.data) {
          console.log("Data:", responseDesc.data);
          setDescSeries(responseDesc.data);
        } else {
          console.log("Tidak ada data!");
          setDescSeries([]);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setDescSeries([]);
      }
    } else {
      console.log("Parameter tidak valid atau judul tidak ada");
    }
  };

  const fetchEpisodeSeries = async () => {
    if (params && params.id) {
      try {
        const responseEpisode = await axios.get(
          `http://localhost:3080/episode1/${params.id}`
        );

        if (responseEpisode.data) {
          console.log("Data:", responseEpisode.data);
          setEpisodeSeries(responseEpisode.data);
        } else {
          console.log("Tidak ada data!");
          setEpisodeSeries([]);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setEpisodeSeries([]);
      }
    } else {
      console.log("Parameter tidak valid atau judul tidak ada");
    }
  };

  console.log(descSeries, "nn");
  console.log(desc, "ll");
  console.log(dataSeries, "hhh");
  console.log(params.id, "param");
  console.log(episodeSeries,"aaa")
  useEffect(() => {
    fetchDataSeries();
    fetchDescSeries();
    fetchEpisodeSeries();
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
              src={dataSeries.poster}
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
                {dataSeries.judul}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
                fontWeight="bold"
              >
                IMBD {descSeries.rating}/10
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
                <Text fontSize={"lg"}>{descSeries.descriptions}</Text>
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
                    {descSeries.jumlah_episode}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Director:
                    </Text>{" "}
                    {descSeries.sutradara}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Stars:
                    </Text>{" "}
                    {descSeries.pemain}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Country:
                    </Text>{" "}
                    {descSeries.country}
                  </ListItem>
                </List>
              </Box>
            </Stack>
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
            {episodeSeries.map((episode, index) => (
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
                      onClick={() => Navigate(`/series/${episode.series_id}/${dataSeries.judul}/${episode.judul}/play`)}
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
