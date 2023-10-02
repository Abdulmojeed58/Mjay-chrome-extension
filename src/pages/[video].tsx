import { Typography } from "@mui/material";

const RecordPage = () => {
  const classes = {
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
      textAlign: "center",
    },
  };
  return (
    <section className="layout min-h-[70vh]">
      <div className="grid md:grid-cols-2">
        <div>
          <Typography variant="h4" sx={classes.heading2}>
            Feature
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default RecordPage;
