import Image from "next/image";
import { Typography } from "@mui/material";
import Logo from "../../assets/icons/iCON 7 1.svg";

import ProfilePics from "../../assets/icons/profile-circle.svg";
import Arrow from "../../assets/icons/arrow-down.svg";
import Link from "next/link";

const ProfileLayout = () => {
  return (
    <div className="layout flex justify-between items-center pt-[60px] md:pt-[90.5px] pb-[38px]">
      <Link href="/" className="flex gap-[8px] items-center">
        <Image src={Logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h2"
          sx={{ fontSize: "16px", fontWeight: "700", color: "#100A42" }}
        >
          HelpMeOut
        </Typography>
      </Link>
      <div className="flex gap-[8px] items-center">
        <div className="rounded-full flex justify-center">
          <Image src={ProfilePics} alt="profile" />
        </div>
        <p className="text-[16px] text-[#141414] font-normal">John Mark</p>
        <Image src={Arrow} alt="profile" />
      </div>
    </div>
  );
};

export default ProfileLayout;
