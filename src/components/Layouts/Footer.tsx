import Image from "next/image";
import { Typography } from "@mui/material";
import { PATHS } from "@/routes";

import Logo from "../../assets/icons/iCON 7 2.svg";
import Link from "next/link";

const paths = [
  {
    name: "Home",
    path: PATHS.home.root,
  },
  {
    name: "Converter",
    path: PATHS.home.root,
  },

  {
    name: "How It Works",
    path: PATHS.home.root,
  },
];

const Footer = () => {
  return (
    <footer className="layout bg-switchColor py-[98px] md:px[130px] grid grid-cols-2 gap-y-[3rem] gap-x-[1rem] md:flex md:flex-row justify-between items-center md:items-start">
      <div className="flex gap-[8px] items-center max-w-fit">
        <Image src={Logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h2"
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            color: "white",
            lineHeight: "19.36px",
          }}
        >
          HelpMeOut
        </Typography>
      </div>
      <div className="max-w-fit">
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
            lineHeight: "20.16px",
            marginBottom: "26px",
          }}
        >
          Menu
        </Typography>
        <div className="grid gap-[24px]">
          {paths.map((path) => (
            <Link
              href={path.path}
              key={path.name}
              className="font-normal text-[16px] leading-[18.77px] text-white"
            >
              {path.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-fit">
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
            lineHeight: "20.16px",
            marginBottom: "26px",
          }}
        >
          About us
        </Typography>
        <div className="grid gap-[24px]">
          {paths.map((path) => (
            <Link
              href={path.path}
              key={path.name}
              className="font-normal text-[16px] leading-[18.77px] text-white"
            >
              {path.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-fit">
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
            lineHeight: "20.16px",
            marginBottom: "26px",
          }}
        >
          Screen Record
        </Typography>
        <div className="grid gap-[24px]">
          {paths.map((path) => (
            <Link
              href={path.path}
              key={path.name}
              className="font-normal text-[16px] leading-[18.77px] text-white"
            >
              {path.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
