import ButtonCard from "@/components/Button";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

import Arrow from "../../assets/icons/arrow-right.svg";
import Pic1 from "../../../public/images/woman-using-smartphone-technology 2.png";
import Pic2 from "../../../public/images/AdobeStock_400053098 1.png";
import Pic3 from "../../../public/images/AdobeStock_362497671 1.png";
import GridPics1 from "../../../public/images/grid.136a9256d16888900db0.svg.png";

export default function Header() {
  const classes = {
    heading: {
      color: "#141414",
      fontFamily: "Sora",
      // fontSize: "64px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "100%",
      marginBottom: "20px",
      width: "468px",
      maxWidth: "100vw",
      fontSize: "50px",
      "@media (min-width:800px)": {
        fontSize: "64px",
      },
    },

    text: {
      color: "rgba(0, 0, 0, 0.75)",
      fontFamily: "Inter",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "28px",
      marginBottom: "48px",
    },
  };

  return (
    <header className="layout pt-[42px] md:pt-[162px] pb-[62px] md:pb-[164px]">
      <Grid container spacing={{ xs: 2, sm: 4, md: 6, lg: 9, xl: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" sx={classes.heading}>
            Show Them Don’t Just Tell
          </Typography>
          <Typography variant="body2" sx={classes.text}>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </Typography>
          <ButtonCard label="Instal HelpMeOut" src={Arrow} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src={Pic2}
                alt="pic"
                width={305.333}
                height={448}
                className="rounded-[10px]"
              />
            </div>
            <div className="row-span-2 relative">
              <Image
                src={Pic1}
                alt="pic"
                width={374}
                height={448}
                className="rounded-[10px] relative z-10"
              />
              <Image
                src={GridPics1}
                alt="grid"
                className="absolute top-[-15%] right-[-10%]"
              />
            </div>
            <div className="relative">
              <Image
                src={Pic3}
                alt="pic"
                width={305.333}
                height={448}
                className="rounded-[10px] relative z-10"
              />
              <Image
                src={GridPics1}
                alt="grid"
                className="absolute top-[-10px] left-[-10%]"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
}
