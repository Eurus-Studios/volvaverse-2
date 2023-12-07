import React from "react";
import { Box, Text, Image, Stack } from "@chakra-ui/react";
import { team } from "../../data/teamData";

const Team = () => {
  return (
    <Box minH="100dvh" pt="70px" px="100px" zIndex="10">
      <Box zIndex="10">
        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          zIndex="10"
        >
          MEET THE TEAM
        </Text>

        {/* team cards */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt="30px"
          zIndex="10"
        >
          {team.map((t) => (
            <Box key={t.name} zIndex="10">
              <Box
                bg="#ECF0F3"
                boxShadow="-13.3826px -11.1521px 27.8803px #fafbff, 11.1521px 11.1521px 27.8803px #161b1d40"
                overflow="hidden"
                borderRadius="1.9rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex="10"
              >
                <Image src={t.image} h="15rem" w="16rem" zIndex="10" />
              </Box>
              <Box ps="10px" zIndex="10">
                <Text
                  color="#3B3B3B"
                  fontFamily="Bebas Neue"
                  fontWeight="400"
                  lineHeight="normal"
                  textTransform="uppercase"
                  fontSize="2rem"
                  mt="15px"
                  zIndex="10"
                >
                  {t.name}
                </Text>
                <Text
                  color="#3B3B3B"
                  fontFamily="Montserrat"
                  fontWeight="300"
                  lineHeight="normal"
                  fontSize="1.2rem"
                >
                  {t.profile}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          bg="rgba(236,240,243,.01)"
          boxShadow="-12px -10px 25px #fafbffb3, 10px 10px 25px #161b1d40"
          display="flex"
          justifyContent="space-between"
          mt="50px"
          p="30px"
          gap="50px"
          zIndex="10"
        >
          <Stack minW="55%" zIndex="10">
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="300"
              lineHeight="normal"
              zIndex="10"
            >
              THE TEAM
            </Text>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              fontSize="1.5rem"
              letterSpacing="1.5px"
              zIndex="10"
            >
              THE VOLAVERSE ROSTER
            </Text>
            <Text
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="300"
              lineHeight="normal"
              zIndex="10"
            >
              The Volaverse roster is an exclusive, dynamic and curious team of
              Web3 enthusiasts and Edtech experts working diligently towards
              making an impact in the lives of people all around the globe by
              contributing to the flourishment of Web 3.0 ecosystem
            </Text>
          </Stack>
          <Stack zIndex="10">
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              letterSpacing="1.5px"
              fontSize="1.5rem"
              zIndex="10"
            >
              CAPABILITIES
            </Text>
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="500"
              lineHeight="normal"
              display="flex"
              flexWrap="wrap"
              rowGap="10px"
              columnGap="20px"
              fontSize=".9rem"
              zIndex="10"
            >
              <span>BLOCKCHAIN</span>
              <span>EDUCATION</span>
              <span>CRYPTO</span>
              <span>GAMIFICATION</span>
              <span>METAVERSE ILLUSTRATION</span>
              <span>PLATFORM INTEGRATION</span>
              <span>3D ANIMATION</span>
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
