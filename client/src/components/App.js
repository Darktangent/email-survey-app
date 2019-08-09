import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const SurverNew = () => {
  return <h2>SurveyNew</h2>;
};
// const Landing = () => {
//   return <h2>Landing</h2>;
// };

class App extends Component {
  // constructor() {}

  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurverNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
// const mapDispatchToProps = () => {};

export default connect(
  null,
  actions
)(App);
