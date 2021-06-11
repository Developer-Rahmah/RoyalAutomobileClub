import applicationReducer from 'RoyalAutomobileClub/services/redux/reducer';

const {createStore} = require('redux');

const store = createStore(applicationReducer);
export default store;
