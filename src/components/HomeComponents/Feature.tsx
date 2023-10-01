import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Image from "next/image";

import Pic1 from "../../assets/icons/record-circle.png";
import VideoLayer from "../../assets/images/Video Repository.png";

const useStyles = makeStyles((theme) => ({
  heading2: {
    color: "#141414",
    fontFamily: "Sora",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
  },

  text2: {
    color: "rgba(0, 0, 0, 0.75)",
    fontFamily: "work Sans",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "30.26px",
    marginTop: "8px",
    marginBottom: "64px",
  },
}));

const Feature = () => {
  const classes = useStyles();

  return (
    <section className="layout py-[80px]">
      <Typography variant="h4" className={classes.heading2}>
        Feature
      </Typography>
      <Typography
        variant="body2"
        className={classes.text2}
        sx={{ textAlign: "center" }}
      >
        Key Highlights of Our Extension
      </Typography>
      <div className="flex flex-col lg:flex-row gap-[56px] justify-between items-center">
        <div>
          <div className="grid grid-cols-10 gap-[16px]">
            <div className="col-span-1">
              <div className="flex items-center justify-center bg-textColor rounded-full w-[48px] h-[48px]">
                <Image src={Pic1} alt="icon" />
              </div>
            </div>
            <div className="col-span-9">
              <Typography
                variant="h5"
                sx={{ fontSize: "28px", fontWeight: "600", color: "#1B233D" }}
              >
                Simple Screen Recording
              </Typography>
              <Typography
                variant="body2"
                className={classes.text2}
                sx={{ textAlign: "left" }}
              >
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-[8px] md:gap-[16px]">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center justify-center bg-textColor rounded-full w-[48px] h-[48px]">
                <Image src={Pic1} alt="icon" />
              </div>
            </div>
            <div className="col-span-8 md:col-span-9">
              <Typography
                variant="h5"
                sx={{ fontSize: "28px", fontWeight: "600", color: "#1B233D" }}
              >
                Simple Screen Recording
              </Typography>
              <Typography
                variant="body2"
                className={classes.text2}
                sx={{ textAlign: "left" }}
              >
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-[16px]">
            <div className="col-span-1">
              <div className="flex items-center justify-center bg-textColor rounded-full w-[48px] h-[48px]">
                <Image src={Pic1} alt="icon" />
              </div>
            </div>
            <div className="col-span-9">
              <Typography
                variant="h5"
                sx={{ fontSize: "28px", fontWeight: "600", color: "#1B233D" }}
              >
                Simple Screen Recording
              </Typography>
              <Typography
                variant="body2"
                className={classes.text2}
                sx={{ textAlign: "left" }}
              >
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Image src={VideoLayer} alt="layer" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
