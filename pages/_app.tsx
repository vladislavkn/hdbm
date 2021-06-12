import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import store from "@root/lib/store";
import { Provider } from "react-redux";
import "@root/styles/globals.css";
import MessagesBundle from "@components/MessagesBundle";
import { useDispatch } from "@root/lib/hooks/typedStoreHooks";
import { tryToLoginWithSavedToken } from "@root/lib/slices/auth";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear server stylesheets
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    // Auto login
    dispatch(tryToLoginWithSavedToken());
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
          <MessagesBundle />
        </Provider>
      </ThemeProvider>
    </>
  );
}
