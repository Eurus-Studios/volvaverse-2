import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { blogs } from "../data/blogData";
import "../styles/blogs.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [index, setIndex] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIndex(Number(id) - 1);
    window.scrollTo(0, 0);
  }, [id]);

  const replaceNewlinesWithBreaks = (text) => {
    return text.replace(/\n/g, "<br/>");
  };

  return (
    <Layout title={"abc"}>
      <Box minH="100dvh" px="100px" mb="100px" py="50px">
        <Link to="/blogs" className="back">
          <span>{"<"}</span>BACK
        </Link>

        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          textAlign="center"
          mt="30px"
        >
          {blogs[index]?.title}
        </Text>
        {blogs[index]?.content.map((c, i) => (
          <Box key={i}>
            <Box display="flex" justifyContent="center" mb="30px">
              <Image
                borderRadius="1.5rem"
                boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                // w="50%"
                src={c.img}
              />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="1.2rem"
              lineHeight="165%"
              mb="30px"
              dangerouslySetInnerHTML={{
                __html: replaceNewlinesWithBreaks(c.desc),
              }}
            />
          </Box>
        ))}

        <Box display="flex" my="70px">
          <hr className="hr" />
          <span className="b-sp">END</span>
          <hr className="hr" />
        </Box>

        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          mb="30px"
        >
          SIMILAR BLOGS
        </Text>

        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={8}>
          {blogs.map((b, i) => (
            <>
              {index === i ? (
                <></>
              ) : (
                <Card
                  maxW="sm"
                  borderRadius="1.9rem"
                  bg="#ECF0F3"
                  boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                  key={i}
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
              )}
            </>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default SingleBlog;
