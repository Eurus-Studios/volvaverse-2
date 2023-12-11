import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "../../styles/association.css";

const Association = () => {
  return (
    <Box
      pt="70px"
      mb="100px"
      px="100px"
      zIndex="10"
      className="all-cnt as-main"
    >
      <Text
        color="#3B3B3B"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        fontSize="4.5rem"
        zIndex="10"
        className="all-title"
      >
        ASSOCIATIONS
      </Text>
      <Box
        display="flex"
        gap="20px"
        flexWrap="wrap"
        justifyContent="center"
        mt="30px"
        zIndex="10"
        className="as-boxes"
      >
        <Box
          bg="#ECF0F3"
          borderRadius="1.5rem"
          h="180px"
          w="180px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="-8.86335px -7.38613px 18.4653px #fafbff, 7.38613px 7.38613px 18.4653px #161b1d40;"
          zIndex="10"
          className="as-box"
        >
          <Box>
            <Box
              mt="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="70%" src="/images/as1.png" />
            </Box>
            <Text
              textAlign="center"
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="#3B3B3B"
              lineHeight="normal"
              fontSize="1.4rem"
              mt="20px"
              className="as-box-txt"
            >
              FILECOIN
            </Text>
          </Box>
        </Box>

        <Box
          bg="#ECF0F3"
          borderRadius="1.5rem"
          h="180px"
          w="180px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="-8.86335px -7.38613px 18.4653px #fafbff, 7.38613px 7.38613px 18.4653px #161b1d40;"
          zIndex="10"
          className="as-box"
        >
          <Box>
            <Box
              mt="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="70%" src="/images/as2.png" />
            </Box>
            <Text
              textAlign="center"
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="#3B3B3B"
              lineHeight="normal"
              fontSize="1.4rem"
              mt="20px"
              className="as-box-txt"
            >
              LISK
            </Text>
          </Box>
        </Box>

        <Box
          bg="#ECF0F3"
          borderRadius="1.5rem"
          h="180px"
          w="180px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="-8.86335px -7.38613px 18.4653px #fafbff, 7.38613px 7.38613px 18.4653px #161b1d40;"
          zIndex="10"
          className="as-box"
        >
          <Box>
            <Box
              mt="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="70%" src="/images/as3.png" />
            </Box>
            <Text
              textAlign="center"
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="#3B3B3B"
              lineHeight="normal"
              fontSize="1.4rem"
              mt="20px"
              className="as-box-txt"
            >
              CRYPTIC ENTMT.
            </Text>
          </Box>
        </Box>

        <Box
          bg="#ECF0F3"
          borderRadius="1.5rem"
          h="180px"
          w="180px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="-8.86335px -7.38613px 18.4653px #fafbff, 7.38613px 7.38613px 18.4653px #161b1d40;"
          zIndex="10"
          className="as-box"
        >
          <Box h="100%" className="as-box-4">
            <Box
              mt="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="70%" src="/images/as4.png" />
            </Box>
            <Text
              textAlign="center"
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="#3B3B3B"
              lineHeight="normal"
              fontSize="1.4rem"
              mt="20px"
              className="as-box-txt"
            >
              YSCHOOL
            </Text>
          </Box>
        </Box>

        <Box
          bg="#ECF0F3"
          borderRadius="1.5rem"
          h="180px"
          w="180px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="-8.86335px -7.38613px 18.4653px #fafbff, 7.38613px 7.38613px 18.4653px #161b1d40;"
          zIndex="10"
          className="as-box"
        >
          <Box className="as-box-5">
            <Box
              mt="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="70%" src="/images/as5.png" />
            </Box>
            <Text
              textAlign="center"
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="#3B3B3B"
              lineHeight="normal"
              fontSize="1.4rem"
              mt="10px"
              className="as-box-txt"
            >
              FINSTREET
            </Text>
          </Box>
        </Box>

        <Box
          bg="#ECF0F3"
          borderRadius="1.5rem"
          h="180px"
          w="180px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="-8.86335px -7.38613px 18.4653px #fafbff, 7.38613px 7.38613px 18.4653px #161b1d40;"
          zIndex="10"
          className="as-box"
        >
          <Box h="100%" className="as-box-6">
            <Box
              mt="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="62%"
            >
              <Image mt="28px" w="70%" src="/images/as6.png" />
            </Box>
            <Text
              textAlign="center"
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="#3B3B3B"
              lineHeight="normal"
              fontSize="1.4rem"
              mt="20px"
              className="as-box-txt"
            >
              MINING DEVS
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Association;
