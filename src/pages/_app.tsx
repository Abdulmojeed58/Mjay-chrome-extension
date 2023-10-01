import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import ProfileLayout from "@/components/Layouts/ProfileLayout";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const theme = createTheme({});

  if (router.pathname.includes("auth")) {
    return (
      <ThemeProvider theme={theme}>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    );
  }

  if (router.pathname.includes("profile")) {
    return (
      <ThemeProvider theme={theme}>
        <div className="min-h-screen">
          <ProfileLayout />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
