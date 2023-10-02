import { Typography } from "@mui/material";
import Image from "next/image";

import Logo from "../../assets/icons/iCON 7 1.svg";
import Google from "../../assets/icons/Google svg.svg";
import Facebook from "../../assets/icons/Facebook svg.svg";
import { useRouter } from "next/router";

const Login = () => {
  const classes = {
    heading2: {
      color: "#141414",
      fontFamily: "Sora",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "48px",
      letterSpacing: "0.32px",
    },
  };
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/profile");
  };

  return (
    <section className="layout pb-[30px] md:pb[125px]">
      <div className="pt-[60px] md:pt-[90.5px] pb-[38px] flex gap-[8px] items-center">
        <Image src={Logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h2"
          sx={{ fontSize: "16px", fontWeight: "700", color: "#100A42" }}
        >
          HelpMeOut
        </Typography>
      </div>
      <div className="grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="grid gap-[32px] w-[475px] max-w-full"
          noValidate
        >
          <div className="grid place-items-center">
            <Typography variant="h4" sx={classes.heading2}>
              Log in or Sign up
            </Typography>
            <p className="text-center text-[14px] text-[#434343] tracking-[0.14px] font-light leading-[21px] mt-[8px] w-[321px] max-w-full">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>
          <div className="grid gap-[27px]">
            <button className="flex gap-[16px] py-[9px] w-full items-center border rounded-[12px] border-[#141414] justify-center">
              <Image src={Google} alt="google" />
              <span>Continue with Google</span>
            </button>
            <button className="flex gap-[16px] py-[9px] w-full items-center border rounded-[12px] border-[#141414] justify-center">
              <Image src={Facebook} alt="google" />
              <span>Continue with Facebook</span>
            </button>
          </div>
          <div className="flex gap-[10px] items-center justify-center">
            <div className="border border-[#B9C2C8] w-[200px] max-w-full" />
            <p className="font-medium text-[14px] text-[#B9C2C8] leading-[21px] tracking-[]0.14px]">
              or
            </p>
            <div className="border border-[#B9C2C8] w-[200px] max-w-full" />
          </div>
          <div className="grid gap-[16px]">
            <div className="grid gap-[12px]">
              <label
                htmlFor="email"
                className="text-[14px] font-medium text-[#141414]"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                id="password"
                className=" p-[16px] border rounded-[12px] outline-none text-[16px] font-medium text-[#B6B3C6] w-full"
              />
            </div>
            <div className="grid gap-[12px]">
              <label
                htmlFor="password"
                className="text-[14px] font-medium text-[#141414]"
              >
                Password
              </label>
              <input
                type="email"
                placeholder="Enter your Password"
                id="password"
                className=" p-[16px] border rounded-[12px] outline-none text-[16px] font-medium text-[#B6B3C6] w-full"
              />
            </div>
          </div>
          <div>
            <button className="py-[16px] px-[20px] w-full rounded-[8px] bg-switchColor text-center text-white">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
