import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  InputGroup,
  Input,
  Select,
  Button,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { InputLeftElement } from "@chakra-ui/input";
import { useNavigate, BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Simple ()  {
  const [searchTerm, setSearchTerm] = useState(""); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  
  const handleSearch= () => {
    try{
      navigate(`/search/${searchTerm}`);
      } catch(error){
        console.log(error)
      }
  }

  const handleHomepage = () => {
    try{
    navigate('/homepage');
    } catch(error){
      console.log(error)
    }
  };

  const handleSport = () => {
    try{
    navigate('/sport');
    } catch(error){
      console.log(error)
    }
  };

  const handleMovie = () => {
    try{
    navigate('/movie');
    } catch(error){
      console.log(error)
    }
  };

  const handleSeries = () => {
    try{
    navigate('/series');
    } catch(error){
      console.log(error)
    }
  };

  const handleAnime= () => {
    try{
    navigate('/anime');
    } catch(error){
      console.log(error)
    }
  };

  const handleTerbaik= () => {
    try{
    navigate('/terbaik');
    } catch(error){
      console.log(error)
    }
  };

  console.log(searchTerm);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_Vidio.png/800px-Logo_Vidio.png"
                alt="Vidio Logo"
                style={{ height: "40px" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link onClick={()=>handleHomepage()}>Homepage</Link>
              <Link onClick={()=>handleSport()}>Sport</Link>
              <Link onClick={()=>handleMovie()}>Movie</Link>
              <Link onClick={()=>handleSeries()}>Series</Link>
              <Link >Terfavorit</Link>
              <Link onClick={()=>handleTerbaik()}>Terbaik</Link>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  {" "}
                  <Select placeholder="Lainnya" variant="unstyled">
                    Lainnya
                  </Select>
                </MenuButton>
                <MenuList>
                  <MenuItem>Music</MenuItem>
                  <MenuItem>News</MenuItem>
                  <MenuItem>Enterteinment</MenuItem>
                  <MenuItem><Link onClick={()=>handleAnime()}>Anime</Link></MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <InputGroup marginRight="10px"
            onChange={(e) => setSearchTerm(e.target.value)}>
              <InputLeftElement pointerEvents="none" >
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search" />
            </InputGroup>
            <Button
            marginRight={"5px"}
            marginLeft={"5px"}
            onClick={() => handleSearch()}>Search</Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}></Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

