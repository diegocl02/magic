/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './redux/reducers';
import * as Actions from './redux/actions';
import {createEmptyAppState} from './redux/createEmptyAppState';
import {bindObservableAsProps} from './redux/bind';
import {Observable} from 'rxjs';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(
      reducer,
      createEmptyAppState()
    );

function appStateToProps(state){
  return {
    changeLife: (change,playername) => store.dispatch(Actions.changeLife(change,playername)),
    setWinner: (playername) => store.dispatch(Actions.setWinner(playername)),
    setTurn: () => store.dispatch(Actions.setTurn()),
    ...state
  }
}

const PreparedApp = bindObservableAsProps(
      // $FlowFixMe: Teach flow about Symbol.observable
      Observable.from(store)
        .distinctUntilChanged()
        .map(state => appStateToProps(state)),
      App,
  );


  ReactDOM.render(<PreparedApp />, document.getElementById('root'));
  registerServiceWorker();
