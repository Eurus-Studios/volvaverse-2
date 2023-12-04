import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";

import "../../styles/home.css";

const Home = () => {
  return (
    <Box minH="92vh" position="relative">
      {/* welcome text */}
      <Text
        position="absolute"
        h="92vh"
        fontFamily="Montserrat"
        fontWeight="200"
        lineHeight="normal"
        letterSpacing="5px"
        fontSize="2rem"
      >
        <span className="sp-1">WELCOME</span>
        <span className="sp-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="77"
            viewBox="0 0 53 77"
            fill="none"
          >
            <g clipPath="url(#clip0_429_916)">
              <mask
                id="mask0_429_916"
                maskType="luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="53"
                height="77"
              >
                <path
                  d="M52.0918 0.97467H0V76.0221H52.0918V0.97467Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_429_916)">
                <path
                  d="M26.0459 76.0221C25.2918 40.4729 24.6754 39.5903 0 38.4984C24.6754 37.412 25.288 36.5239 26.0459 0.97467C26.7999 36.5239 27.4164 37.4066 52.0918 38.4984C27.4164 39.5903 26.8038 40.462 26.0459 76.0221Z"
                  fill="#3D3D3D"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_429_916">
                <rect
                  width="52.0918"
                  height="75.0475"
                  fill="white"
                  transform="translate(0 0.97467)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="sp-3">2023</span>
      </Text>

      {/* left social links */}
      <Box
        position="absolute"
        right="1%"
        display="flex"
        flexDirection="column"
        gap="30px"
        className="home-sc-links"
      >
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M31.8826 22.6207C31.8826 28.4233 28.4233 31.8826 22.6207 31.8826H20.7237C19.8469 31.8826 19.1295 31.1652 19.1295 30.2884V21.0903C19.1295 20.6599 19.4802 20.2932 19.9107 20.2932L22.7163 20.2454C22.9395 20.2295 23.1308 20.0701 23.1786 19.8469L23.7366 16.8021C23.7844 16.5152 23.5612 16.2442 23.2583 16.2442L19.8628 16.292C19.4165 16.292 19.0658 15.9413 19.0498 15.5109L18.9861 11.6052C18.9861 11.3502 19.1933 11.127 19.4643 11.127L23.2902 11.0632C23.5612 11.0632 23.7684 10.856 23.7684 10.585L23.7047 6.75909C23.7047 6.48808 23.4974 6.28086 23.2264 6.28086L18.9223 6.34464C16.276 6.39247 14.1718 8.56046 14.2196 11.2067L14.2993 15.5906C14.3153 16.0369 13.9646 16.3876 13.5182 16.4036L11.6052 16.4355C11.3342 16.4355 11.127 16.6427 11.127 16.9137L11.1749 19.9425C11.1749 20.2135 11.3821 20.4208 11.6531 20.4208L13.566 20.3889C14.0124 20.3889 14.3631 20.7396 14.379 21.17L14.5225 30.2565C14.5384 31.1493 13.8211 31.8826 12.9284 31.8826H9.26188C3.45926 31.8826 0 28.4233 0 22.6047V9.26188C0 3.45926 3.45926 0 9.26188 0H22.6207C28.4233 0 31.8826 3.45926 31.8826 9.26188V22.6207Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M22.632 0.882553H9.2665C3.46098 0.882553 0 4.34353 0 10.1491V23.4986C0 29.32 3.46098 32.781 9.2665 32.781H22.616C28.4215 32.781 31.8825 29.32 31.8825 23.5145V10.1491C31.8984 4.34353 28.4375 0.882553 22.632 0.882553ZM15.9492 23.0201C12.5361 23.0201 9.76093 20.2449 9.76093 16.8318C9.76093 13.4186 12.5361 10.6435 15.9492 10.6435C19.3624 10.6435 22.1375 13.4186 22.1375 16.8318C22.1375 20.2449 19.3624 23.0201 15.9492 23.0201ZM25.3912 8.66577C25.3114 8.85716 25.1998 9.03261 25.0562 9.1921C24.8967 9.33564 24.7213 9.44729 24.5299 9.52703C24.3385 9.60678 24.1312 9.65462 23.9238 9.65462C23.4932 9.65462 23.0945 9.49513 22.7914 9.1921C22.6479 9.03261 22.5363 8.85716 22.4565 8.66577C22.3768 8.47438 22.3289 8.26704 22.3289 8.0597C22.3289 7.85236 22.3768 7.64502 22.4565 7.45363C22.5363 7.24629 22.6479 7.0868 22.7914 6.92731C23.1583 6.56048 23.7165 6.38503 24.2269 6.49668C24.3385 6.51263 24.4342 6.54453 24.5299 6.59237C24.6256 6.62427 24.7213 6.67212 24.817 6.73592C24.8967 6.78377 24.9765 6.86351 25.0562 6.92731C25.1998 7.0868 25.3114 7.24629 25.3912 7.45363C25.4709 7.64502 25.5188 7.85236 25.5188 8.0597C25.5188 8.26704 25.4709 8.47438 25.3912 8.66577Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="23"
            viewBox="0 0 32 27"
            fill="none"
          >
            <path
              d="M23.9119 0.781006H7.97064C3.18826 0.781006 0 3.96926 0 8.75164V18.3164C0 23.0988 3.18826 26.287 7.97064 26.287H23.9119C28.6943 26.287 31.8826 23.0988 31.8826 18.3164V8.75164C31.8826 3.96926 28.6943 0.781006 23.9119 0.781006ZM18.9542 15.176L15.0167 17.5353C13.4226 18.4918 12.1153 17.7585 12.1153 15.8933V11.1588C12.1153 9.29366 13.4226 8.56036 15.0167 9.51684L18.9542 11.8761C20.4686 12.8007 20.4686 14.2673 18.9542 15.176Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
      </Box>

      {/* scroll */}
      <Box position="absolute" right="1%" bottom="5%">
        <a href="#about">
          <span className="sp-4">SCROLL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="28"
            viewBox="0 0 22 30"
            fill="none"
          >
            <path
              d="M2 18.7621L11.3078 28.0699L20.6156 18.7621"
              stroke="#3B3B3B"
              stroke-width="2.191"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3076 2.00235L11.3076 27.8097"
              stroke="#3B3B3B"
              stroke-width="2.191"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </Box>

      <Box display="flex" justifyContent="center" position="relative">
        {/* border-box */}
        <Box
          border="1px solid #3B3B3B"
          mt="50px"
          position="relative"
          h="500"
          w="380px"
        >
          <hr className="hr-1" />
          <hr className="hr-2" />
        </Box>
      </Box>

      {/* <Model /> */}
      <Image
        src="/images/home.png"
        h="550px"
        position="absolute"
        className="home-img"
      />

      {/* text-1 */}
      <Text
        color="#3B3B3B"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        fontSize="6rem"
        position="absolute"
        top="10%"
        left="24.5%"
      >
        VOLAVERSE
      </Text>

      {/* text-2 */}
      <Text
        color="#3B3B3B"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        fontSize="6rem"
        position="absolute"
        top="32%"
        right="20.2%"
      >
        EDUCATION
      </Text>

      {/* text-3 */}
      <Text
        color="#3B3B3B"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        fontSize="6rem"
        position="absolute"
        bottom="27%"
        left="15.9%"
      >
        METAVERSE
      </Text>

      {/* home-button */}
      <Box display="flex" justifyContent="center" mt="55px">
        <Button
          fontFamily="Bebas Neue"
          fontWeight="400"
          fontSize="2.3rem"
          background="linear-gradient(90deg,#745AC3 66.98%,rgba(248,138,176,.8) 100%)"
          boxShadow="8.75205px 9.62725px 26.2561px #0006"
          color="white"
          padding="25px 25px"
          className="home-btn"
        >
          GETS STARTED
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
