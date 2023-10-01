import React from "react";
import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import makeStyles from "@mui/styles/makeStyles";



const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#120B48",
    borderRadius: "8px",
    padding: "22px",
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Work Sans",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    textTransform: "none",
  },
}));

interface ButtonProps {
  src?: StaticImageData;
  label: string;
}

const ButtonCard: React.FC<ButtonProps> = ({ src, label }) => {
  const classes = useStyles();
  return (
    <>
      {src && (
        <Button
          variant="contained"
          endIcon={<Image src={src} width={20} height={20} alt="btn" />}
          disableElevation
          className={classes.btn}
        >
          {label}
        </Button>
      )}
      {!src && (
        <Button variant="contained" disableElevation className={classes.btn}>
          {label}
        </Button>
      )}
    </>
  );
};

export default ButtonCard;
