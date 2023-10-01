import Image from "next/image";

import { Typography } from "@mui/material";

import Logo from "../../assets/icons/iCON 7 1.svg";

import { PATHS } from "@/routes";
import Link from "next/link";

const paths = [
  {
    name: "Feature",
    path: PATHS.home.root,
  },

  {
    name: "How It Works",
    path: PATHS.home.root,
  },
];

const Navbar = () => {
  return (
    <div className="layout py-[30px]">
      {/* desktop */}
      <div className="flex justify-between items-center">
        <div className="flex gap-[8px] items-center">
          <Image src={Logo} width={40} height={40} alt="logo" />
          <Typography
            variant="h2"
            sx={{ fontSize: "16px", fontWeight: "700", color: "#100A42" }}
          >
            HelpMeOut
          </Typography>
        </div>
        <div className="hidden md:flex gap-[40px]">
          {paths.map((path) => (
            <Link
              href={path.path}
              key={path.name}
              className="font-medium text-[16px] text-black"
            >
              {path.name}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href={PATHS.auth.login}
            className="text-switchColor text-[16px] font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
