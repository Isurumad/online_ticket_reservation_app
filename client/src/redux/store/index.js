import { combineReducers } from 'redux';
import userReducer from '../reducers/user'
import scheduleFiterReducer from '../reducers/scheduleFilter'
import scheduleReducer from '../reducers/schedule'

export default combineReducers({
    users: userReducer,
    schedules:scheduleReducer,
    scheduleFilter: scheduleFiterReducer,
});
  
  
  