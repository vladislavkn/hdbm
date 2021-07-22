import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import store from "@root/lib/store";
import { Provider } from "react-redux";
import "@root/styles/globals.css";
import {
  DEBUG_SET_USER,
  loadLocalUser,
  tryToLoginWithSavedToken,
} from "@root/lib/slices/auth";
import ErrorBoundary from "@components/ErrorBoundary";
import DialogsProvider from "@components/Dialogs/DialogsProvider";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Clear server stylesheets
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    // Auto login
    store.dispatch(tryToLoginWithSavedToken());
    store.dispatch(loadLocalUser());
    // @ts-ignore
    window.setUser = (newUser) => store.dispatch(DEBUG_SET_USER(newUser));
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
        <ErrorBoundary>
          <Provider store={store}>
            <DialogsProvider>
              <Component {...pageProps} />
            </DialogsProvider>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}
