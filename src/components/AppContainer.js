import {connect} from "react-redux";

import {selectorCounter} from '../ducks/selectors';
import {actionIncrement, actionDecrement} from '../ducks/actions';
import App from './App';


export const mapStateToProps = (state) => ({
  counter: selectorCounter(state)
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actionIncrement()),
  decrement: () => dispatch(actionDecrement()),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
