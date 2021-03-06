import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAuthUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/New';
import ThankYou from './surveys/ThankYou';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAuthUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/surveys/:id/:choice" component={ThankYou} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  {
    fetchAuthUser,
  },
)(App);
