import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";

import Vector from "../../../public/images/Vector.png";

const Description = () => {
  const classes = {
    heading1: {
      color: "#141414",
      fontFamily: "Sora",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "59px",
    },

    text1: {
      color: "rgba(0, 0, 0, 0.75)",
      fontFamily: "work Sans",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "30.26px",
      marginTop: "16px",
      marginBottom: "28px",
      textAlign: "center",
    },
  };
  return (
    <section className="layout pt-[103px] pb-[118.82px]">
      <Typography variant="h4" sx={classes.heading1}>
        How It Works
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="flex items-center justify-center bg-switchColor h-[68px] w-[68px] rounded-full font-bold text-[42px] text-white mx-auto mb-[32px]">
            <h1>1</h1>
          </div>
          <Typography
            variant="h5"
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#1B233D",
            }}
          >
            Record Screen
          </Typography>
          <Typography variant="body2" sx={classes.text1} textAlign="center">
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <Image src={Vector} alt="vector" />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="flex items-center justify-center bg-switchColor h-[68px] w-[68px] rounded-full font-bold text-[42px] text-white mx-auto mb-[32px]">
            <h1>1</h1>
          </div>
          <Typography
            variant="h5"
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#1B233D",
              textAlign: "center",
            }}
          >
            Record Screen
          </Typography>
          <Typography variant="body2" sx={classes.text1}>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <Image src={Vector} alt="vector" />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="flex items-center justify-center bg-switchColor h-[68px] w-[68px] rounded-full font-bold text-[42px] text-white mx-auto mb-[32px]">
            <h1>1</h1>
          </div>
          <Typography
            variant="h5"
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#1B233D",
              textAlign: "center",
            }}
          >
            Record Screen
          </Typography>
          <Typography variant="body2" sx={classes.text1}>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <Image src={Vector} alt="vector" />
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Description;
