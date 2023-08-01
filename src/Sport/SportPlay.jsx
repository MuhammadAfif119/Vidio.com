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
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function SportPlay() {
  const [dataSport, setDataSport] = useState([]);
  const params = useParams();

  const desc = params.id;

  const fetchDataSport = async () => {
    if (params && params.id) {
      try {
        const responseSport = await axios.get(
          `http://localhost:3080/sport/${params.id}`
        );

        if (responseSport.data) {
          console.log("Data:", responseSport.data);
          setDataSport(responseSport.data);
        } else {
          console.log("Tidak ada data!");
          setDataSport([]);
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setDataSport([]);
      }
    } else {
      console.log("Parameter tidak valid atau judul tidak ada");
    }
  };

  console.log(desc, "ll");
  console.log(dataSport, "hhh");
  console.log(params.id, "param");
  useEffect(() => {
    fetchDataSport();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <iframe
            width="560"
            height="315"
            src = {dataSport.link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {dataSport.judul}
            </Heading>
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
              <Text fontSize={"lg"}>{dataSport.description}</Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
