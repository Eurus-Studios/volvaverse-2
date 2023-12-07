import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import "../../styles/layout.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="layout">
        <div className="l-1"></div>
        <div className="l-2"></div>
        <div className="l-3"></div>
        <div className="l-4"></div>
        <div className="l-5"></div>
        <div className="l-6"></div>
        <div className="l-7"></div>

        {children}
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
