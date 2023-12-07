import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Join = () => {
  return (
    <Box
      minH="100dvh"
      px="100px"
      display="flex"
      alignItems="center"
      zIndex="10"
    >
      <Box w="100%" zIndex="10">
        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          zIndex="10"
        >
          JOIN US
        </Text>
        <Box display="flex" gap="40px" mt="30px" zIndex="10">
          <Box
            bg="#ECF0F3"
            borderRadius="2rem"
            p="15px"
            boxShadow="-15.8632px -13.2194px 33.0484px #fafbff, 13.2194px 13.2194px 33.0484px #161b1d40"
            zIndex="10"
          >
            <Box display="flex" justifyContent="center">
              <Image src="images/j1.png" w="13rem" />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textAlign="center"
              fontSize="1.6rem"
            >
              SHINE WITH SWATI
            </Text>
          </Box>
          <Box
            bg="#ECF0F3"
            borderRadius="2rem"
            p="15px"
            boxShadow="-15.8632px -13.2194px 33.0484px #fafbff, 13.2194px 13.2194px 33.0484px #161b1d40"
            zIndex="10"
          >
            <Box display="flex" justifyContent="center">
              <Image src="images/j2.png" w="13rem" />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textAlign="center"
              fontSize="1.6rem"
            >
              VOLABEE VINES
            </Text>
          </Box>
          <Box
            bg="#ECF0F3"
            borderRadius="2rem"
            p="15px"
            boxShadow="-15.8632px -13.2194px 33.0484px #fafbff, 13.2194px 13.2194px 33.0484px #161b1d40"
            zIndex="10"
          >
            <Box display="flex" justifyContent="center">
              <Image src="images/j3.png" w="13rem" />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textAlign="center"
              fontSize="1.6rem"
            >
              WEB3 BUDDHA
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Join;
