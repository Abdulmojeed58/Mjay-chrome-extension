import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../assets/icons/Facebook svg.png";

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
    <section className="layout min-h-[70vh] my-[40px]">
      <div className="grid md:grid-cols-2 gap-y-5">
        <div className="md:border-r">
          <Typography variant="h4" sx={classes.heading2}>
            Your video is ready!
          </Typography>
          <div className="md:mr-[72px] grid gap-[64px] mt-[40px]">
            <div>
              <p>Name</p>
              <h3 className="text-[24px] text-[#413C6D] font-[600] mt-[10px]">
                Untitled_Video_20232509
              </h3>
            </div>
            <div className="flex justify-between items-center p-[16px] border rounded-[12px] outline-none text-[16px] font-medium text-[#B6B3C6] bg-[#E7E7ED]">
              <input
                type="text"
                placeholder="enter email of receiver"
                className="bg-transparent outline-none border-none"
              />
              <button className="py-[10px] px-[18px] bg-switchColor rounded-[8px] text-white">
                Send
              </button>
            </div>
            <div>
              <p>Video Url</p>
              <div className="flex justify-between items-center p-[16px] border rounded-[12px] outline-none text-[16px] font-medium text-[#B6B3C6] mt-[16px]">
                <input
                  type="text"
                  placeholder="enter email of receiver"
                  className="bg-transparent outline-none border-none"
                />
                <button className="py-[10px] px-[18px] bg-transparent border border-switchColor text-switchColor rounded-[8px]">
                  copy
                </button>
              </div>
            </div>
            <div>
              <p>Share your video</p>
              <div className="flex flex-wrap gap-[32px] mt-[15px]">
                <Link
                  href="/"
                  className="flex gap-8 px-[16px] py-[10px] rounded-[6px] border border-[#0A0628]"
                >
                  <Image src={Facebook} alt="facebook" />
                  <span className="text-[16px] text-[#08051E] font-[500]">
                    Facebook
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex gap-8 px-[16px] py-[10px] rounded-[6px] border border-[#0A0628]"
                >
                  <Image src={Facebook} alt="facebook" />
                  <span className="text-[16px] text-[#08051E] font-[500]">
                    WhatsApp
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex gap-8 px-[16px] py-[10px] rounded-[6px] border border-[#0A0628]"
                >
                  <Image src={Facebook} alt="facebook" />
                  <span className="text-[16px] text-[#08051E] font-[500]">
                    Telegram
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-[40px]">
          <Image src="/images/video.png" alt="video" width={575} height={473} />
        </div>
      </div>
    </section>
  );
};

export default RecordPage;
