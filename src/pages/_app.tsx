import { iransans } from "@/components/fonts";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";

const theme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: iransans.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
