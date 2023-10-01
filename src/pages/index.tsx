import Description from "@/components/HomeComponents/Description";
import Feature from "@/components/HomeComponents/Feature";
import Header from "@/components/HomeComponents/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="h-[60px] bg-[#F4F6F8]"></div>
      <Feature />
      <div className="h-[60px] bg-[#F4F6F8]"></div>
      <Description />
    </main>
  );
}
