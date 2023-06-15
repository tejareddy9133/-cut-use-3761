import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Songitem = () => {
  return (
    <div>
      <Box
        bg="black"
        h={"20"}
        w="75%"
        p={0}
        color="white"
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Box bg="black" h={"20"} w="100%" p={0} color="white">
          <img
            src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/20230614165945000/8907212007012/1686816917782/resources/8907212007012.jpg"
            alt=""
            style={{ height: "100%", width: "10%" }}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            (lg) In love with React & Next
          </Heading>
        </Box>
      </Box>
    </div>
  );
};

export default Songitem;
