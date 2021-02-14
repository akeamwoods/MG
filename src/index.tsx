import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { GamePage } from "./pages/GamePage";
import { store } from "./store";
import { Route, HashRouter } from "react-router-dom";
import "./style.css";
import { MenuPage } from "./pages/MenuPage";
import { HighscoresPage } from "./pages/HighscoresPage";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={MenuPage} key={1} />
        <Route exact path="/Play" component={GamePage} key={2} />
        <Route exact path="/Scores" component={HighscoresPage} key={3} />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
