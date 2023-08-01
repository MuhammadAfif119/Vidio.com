import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieDesc() {
  const [dataFilm, setDataFilm] = useState([]);
  const [descFilm, setDescFilm] = useState([]);
  const params = useParams();
  const Navigate = useNavigate();

  const desc = params.id;

  const fetchDataFilm = async () => {
    if (params && params.id) {
      try {
        const responseFilm = await axios.get(
          `http://localhost:3080/film/${params.id}`
        );

        if (responseFilm.data) {
          console.log("Data:", responseFilm.data);
          setDataFilm(responseFilm.data);
        } else {
          console.log("Tidak ada data!");
          setDataFilm([]);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setDataFilm([]);
      }
    } else {
      console.log("Parameter tidak valid atau judul tidak ada");
    }
  };

  const fetchDescFilm = async () => {
    if (params && params.id) {
      try {
        const responseDesc = await axios.get(
          `http://localhost:3080/description/${params.id}`
        );

        if (responseDesc.data) {
          console.log("Data:", responseDesc.data);
          setDescFilm(responseDesc.data);
        } else {
          console.log("Tidak ada data!");
          setDescFilm([]);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setDescFilm([]);
      }
    } else {
      console.log("Parameter tidak valid atau judul tidak ada");
    }
  };

  console.log(descFilm, "nn");
  console.log(desc, "ll");
  console.log(dataFilm, "hhh");
  console.log(params.id, "param");
  useEffect(() => {
    fetchDataFilm();
    fetchDescFilm();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            alt={"product image"}
            src={dataFilm.poster}
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
              {dataFilm.judul}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              fontWeight="bold"
            >
              IMBD {descFilm.rating}/10
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
              <Text fontSize={"lg"}>{descFilm.description}</Text>
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
                    Director:
                  </Text>{" "}
                  {descFilm.sutradara}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Stars:
                  </Text>{" "}
                  {descFilm.pemain}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Country:
                  </Text>{" "}
                  {descFilm.country}
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
            onClick={() => Navigate(`/movie/${dataFilm.id}/${dataFilm.judul}/play`)}
          >
            Tonton Sekarang
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
