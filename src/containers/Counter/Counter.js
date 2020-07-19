import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/actions';

class Counter extends Component {

  render() {
    const stores = this.props.storedResults.map((item) => (
      <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>
        {item.value}
      </li>
    ));
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}> Store Result </button>
        <ul>{stores}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.results.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, counter: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, elemId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
