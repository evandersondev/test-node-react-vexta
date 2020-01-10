import React from "react";

import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes />
      <GlobalStyle />
    </div>
  );
};

export default App;
