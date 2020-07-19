import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";
import { createStore, combineReducers} from "redux";
import { Provider } from "react-redux";

const rootReducer=combineReducers({
    ctr: counterReducer,
    results:resultsReducer
})
const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
