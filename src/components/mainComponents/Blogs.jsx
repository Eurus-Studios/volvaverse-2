import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  Stack,
  Heading,
} from "@chakra-ui/react";
import "../../styles/blogs.css";
import { blogs } from "../../data/blogData";

const Blogs = () => {
  const handleClick = () => {
    window.open("/blogs", "_blank");
  };
  return (
    <Box minH="100dvh" px="100px" pt="70px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text
          color="#3D3D3D"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
        >
          BLOGS
        </Text>
        <Button
          bg="#745AC3"
          color="#FFF"
          fontFamily="Bebas Neue"
          fontWeight="400"
          fontSize="1.2rem"
          lineHeight="normal"
          className="blogs-btn"
          boxShadow="5.236px 5.76px 15.708px 0px rgba(0, 0, 0, 0.40)"
          onClick={handleClick}
        >
          VIEW ALL BLOGS{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="15"
              viewBox="0 0 26 20"
              fill="none"
            >
              <path
                d="M16.5024 18.377L24.8799 9.99949L16.5024 1.62199"
                stroke="white"
                stroke-width="1.97201"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.41717 9.99902L24.645 9.99902"
                stroke="white"
                stroke-width="1.97201"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Button>
      </Box>

      {/* blog-cards */}
      <Box display="flex" justifyContent="space-between" mt="30px">
        {blogs.slice(0, 3).map((b) => (
          <Card
            maxW="sm"
            borderRadius="1.9rem"
            bg="#ECF0F3"
            boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
            key={b.id}
          >
            <CardBody p="18px">
              <Image
                src={b.content[0].img}
                alt="Green double couch with wooden legs"
                borderTopRadius="1.7rem"
                h="50%"
                w="100%"
              />
              <Stack mt="15px" spacing="3">
                <Text
                  color="#3D3D3D"
                  fontFamily="Inter"
                  fontWeight="600"
                  lineHeight="16px"
                >
                  {b.date}
                </Text>
                <Heading
                  textTransform="uppercase"
                  color="#3B3B3B"
                  fontFamily="Bebas Neue"
                  fontWeight="400"
                  lineHeight="100%"
                >
                  {b.title}
                </Heading>
                <Text
                  color="#3B3B3B"
                  fontFamily="Montserrat"
                  fontWeight="300"
                  lineHeight="110%"
                >
                  {b.content[0].desc.substring(0, 200)}...
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Blogs;
