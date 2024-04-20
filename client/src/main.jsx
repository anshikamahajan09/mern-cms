import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";

const colors = {
  brand: {
    900: "#222831",
    800: "#393e46",
    700: "#00adb5",
    600: "#eeeeee",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </ChakraProvider>
  </Provider>
  </PersistGate>
);
