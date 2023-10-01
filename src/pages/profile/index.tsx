import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Search from "../../assets/icons/search-normal.svg";
import Image from "next/image";
import CardComp from "@/components/Card";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  heading2: {
    color: "#141414",
    fontFamily: "Sora",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
  },

  text2: {
    color: "rgba(0, 0, 0, 0.75)",
    fontFamily: "work Sans",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "30.26px",
    marginTop: "8px",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <section className="">
      <div className="layout flex items-center flex-col lg:flex-row gap-7 lg:gap-0 justify-between mb-[43.5px]">
        <div>
          <Typography variant="h4" className={classes.heading2}>
            Hello, John Mark
          </Typography>
          <Typography variant="body2" className={classes.text2}>
            Here are your recorded video
          </Typography>
        </div>
        <div className="flex gap-[16px] items-center p-[24px] pr-[40px] border rounded-[12px] outline-none text-[16px] font-medium text-[#c3c3c3] bg-[#B6B3C624] w-[400px] max-w-full">
          <Image src={Search} alt="search" />
          <input
            type="text"
            placeholder="Search for a particular video"
            className="border-none outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="layout border-t border-[#0000001A] h-[70vh] overflow-auto pt-[40px]">
        <h4>Recent File</h4>
        <div className="grid gap-[20px] md:gap-[64px] md:grid-cols-2 justify-between mt-[24px]">
          <Link href="/profile/a">
            <CardComp />
          </Link>
          <Link href="/profile/a">
            <CardComp />
          </Link>
          <Link href="/profile/a">
            <CardComp />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
