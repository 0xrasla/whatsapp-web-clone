import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
