import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Marquee from "react-fast-marquee";

import React, { useState, useEffect } from "react";

const RunningText = ({ messages }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://mcdn.coolmate.me/image/January2023/mceclip1_67.jpg"
        )`,
        backgroundSize: "cover",
        color: "#F9F86C",
        backgroundColor: "#bc0001",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div>
        <Marquee gradient={false} style={{ padding: "0.8rem 0" }}>
          {messages.map((message: any, ind: any) => (
            <Typography variant="body2" key={ind} style={{ marginRight: 100 }}>
              {message}
            </Typography>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RunningText;
