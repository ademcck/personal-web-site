import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Concat from "./Concat";
import Footer from "./Footer";
import NaviHeader from "./NaviHeader";
import Slider from "./Slider";
import TextArea from "./TextArea";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="bg-dark" style={{ width: "100%" }}>
          <NaviHeader />
        </div>
        <Switch>
          <Route exact path="/">
            <Slider />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/concat">
            <Concat />
          </Route>
          <Route exact path="/text">
            <TextArea />
          </Route>
        </Switch>
        <div className="bg-dark" style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    );
  }
}
