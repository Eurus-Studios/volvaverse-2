import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import "../../styles/layout.css";
import UI from "./UI";
import { Box } from "@chakra-ui/react";

const Layout = ({ children, title, description, keywords, author }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <Box position="absolute" h="100%" w="100%" overflow="hidden">
        <UI />
      </Box>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className={`${isScrolled ? "header-ht" : "header-m"}`}></div>

      <Header />
      <main className="layout">
        <div className="child">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Volaverse",
  description: "",
  keywords: "",
  author: "",
};

export default Layout;
