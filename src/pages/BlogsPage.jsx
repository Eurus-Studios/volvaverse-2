import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Layout from "../components/layout/Layout";
import { blogs } from "../data/blogData";
import { Link } from "react-router-dom";
import "../styles/blogs.css";

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setLoading(true);
    const value = e.target.value;
    setSearchQuery(value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);
  };

  return (
    <Layout title={"Volaverse - Blogs"}>
      <Box minH="100dvh" px="100px" py="50px" zIndex="10">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="50px"
        >
          <Link to="/" className="back">
            <span>{"<"}</span>BACK
          </Link>
          <InputGroup w="35%">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#3B3B3B" />
            </InputLeftElement>
            <Input
              className="search"
              type="tel"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </InputGroup>
        </Box>

        {searchQuery.trim() === "" ? (
          <>
            <Box mb="60px" zIndex="10">
              <Text
                color="#3B3B3B"
                fontFamily="Bebas Neue"
                fontWeight="400"
                lineHeight="normal"
                fontSize="4.5rem"
                zIndex="10"
              >
                VOLAVERSE BLOGS
              </Text>
              <Box
                display="grid"
                gridTemplateColumns="1fr 1fr"
                gap={8}
                zIndex="10"
              >
                <Box zIndex="10">
                  <Image
                    borderRadius="1.9rem"
                    boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                    src={blogs[0].content[0].img}
                    alt="Blog Image"
                  />
                </Box>
                <Box>
                  <Text
                    color="#3D3D3D"
                    fontFamily="Inter"
                    fontWeight="600"
                    lineHeight="normal"
                    mb="10px"
                  >
                    {blogs[0].date}
                  </Text>
                  <Text
                    color="#3B3B3B"
                    fontFamily="Bebas Neue"
                    fontWeight="400"
                    lineHeight="normal"
                    fontSize="2.5rem"
                  >
                    {blogs[0].title}
                  </Text>
                  <Text
                    color="#3B3B3B"
                    fontFamily="Montserrat"
                    fontWeight="500"
                    fontSize="1.1rem"
                    lineHeight="110%"
                    mb="20px"
                  >
                    {blogs[0].content[0].desc.substring(0, 300)}...
                  </Text>
                  <Link to={`/blogs/${blogs[0].id}`}>Read More</Link>
                </Box>
              </Box>
            </Box>

            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr"
              gap={8}
              mb="100px"
            >
              {blogs.map((b) => (
                <Card
                  maxW="sm"
                  borderRadius="1.9rem"
                  bg="#ECF0F3"
                  boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                  key={b.id}
                >
                  <CardBody p="18px" pb="50px">
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
                      <Link to={`/blogs/${b.id}`}>Read More</Link>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Box>
          </>
        ) : (
          <>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Spinner
                  thickness="3px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#3B3B3B"
                  size="lg"
                />
              </Box>
            ) : (
              <>
                {filteredBlogs.length > 0 ? (
                  <Box
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    gap={8}
                    mt="70px"
                    mb="80px"
                  >
                    {filteredBlogs.map((b) => (
                      <Card
                        maxW="sm"
                        borderRadius="1.9rem"
                        bg="#ECF0F3"
                        boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                        key={b.id}
                      >
                        <CardBody p="18px" pb="50px">
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
                            <Link to={`/blogs/${b.id}`}>Read More</Link>
                          </Stack>
                        </CardBody>
                      </Card>
                    ))}
                  </Box>
                ) : (
                  <Text textAlign="center" mt="70px">
                    No matching blogs found!
                  </Text>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </Layout>
  );
};

export default BlogsPage;
