import useDarkMode from "../hooks/useDarkMode";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useDarkMode();
  return <Component {...pageProps} />;
}

export default MyApp;
