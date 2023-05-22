import React from "react";
import Image from "next/image";
import { Counter } from "@/src/features/counter/Counter";
import { Card } from "@mui/material";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box
      // className="App text-black"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <header className="App-header">
        <Image
          src={`${process.env.PUBLIC_URL ?? ""}/logo.svg`}
          className="App-logo"
          alt="logo"
          width={500}
          height={200}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {/* <Image src="/plus.png" alt="plus" width={24} height={24} /> */}
          <p style={{ margin: "0 10px" }}>Text under the logo</p>
          {/* <Image src="/minus.png" alt="minus" width={24} height={24} /> */}
        </div>
        <Counter />
      </header>
    </Box>
  );
};

export default Home;
