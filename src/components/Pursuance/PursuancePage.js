import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PursuanceMenu from './PursuanceMenu';
import TaskListView from './views/TaskListView';
import './PursuancePage.css';
import { connect } from 'react-redux';
import { setCurrentPursuance } from '../../actions';

class PursuancePage extends Component {

  componentWillMount() {
    const { setCurrentPursuance, match } = this.props;
    const currentPursuanceId = Number(match.params.pursuanceId);
    setCurrentPursuance(currentPursuanceId);
  }

  render() {
    return (
      <Router>
        <div className="PursuancePage">
          <nav>
            <PursuanceMenu />
          </nav>
          <article>
            <Switch>
              <Route exact path="/pursuance/:pursuanceId" component={TaskListView} />
              <Route exact path="/pursuance/:pursuanceId/tasks" component={TaskListView} />
            </Switch>
          </article>
        </div>
      </Router>
    );
  }

}

export default connect(null, { setCurrentPursuance })(PursuancePage);