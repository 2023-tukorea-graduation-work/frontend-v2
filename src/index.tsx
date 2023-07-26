import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { persistStore } from "redux-persist";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

declare module "@mui/material/styles" {
  interface Palette {
    accept: Palette["primary"];
    deny: Palette["primary"];
  }

  interface PaletteOptions {
    accept: PaletteOptions["primary"];
    deny: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb07a",
    },
    secondary: {
      main: "#399DA3",
    },
    accept: {
      main: "rgba(131, 194, 197, 0.5)",
      contrastText: "#000000",
    },
    deny: {
      main: "#FBBBBB",
    },
  },
});
const persistor = persistStore(store);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
