import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";

import Vector from "../../assets/images/Vector.png";

const useStyles = makeStyles((theme) => ({
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
  },
}));

const Description = () => {
  const classes = useStyles();
  return (
    <section className="layout pt-[103px] pb-[118.82px]">
      <Typography variant="h4" className={classes.heading1}>
        How It Works
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
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
          <Typography
            variant="body2"
            className={classes.text1}
            sx={{ textAlign: "center" }}
          >
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </Typography>
          <Image src={Vector} alt="vector" />
        </Grid>
        <Grid item xs={12} md={4}>
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
          <Typography
            variant="body2"
            className={classes.text1}
            sx={{ textAlign: "center" }}
          >
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </Typography>
          <Image src={Vector} alt="vector" />
        </Grid>
        <Grid item xs={12} md={4}>
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
          <Typography
            variant="body2"
            className={classes.text1}
            sx={{ textAlign: "center" }}
          >
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </Typography>
          <Image src={Vector} alt="vector" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Description;