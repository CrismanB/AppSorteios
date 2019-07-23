import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import GlobalStyles from "./global";
import Footer from "./components/Footer";
const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;
