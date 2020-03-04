import { combineReducers } from 'redux';
import userReducer from '../reducers/user'
import scheduleFiterReducer from '../reducers/scheduleFilter'
import scheduleReducer from '../reducers/schedule'
import advertisementReducer from '../reducers/advertistment'

export default combineReducers({
    users: userReducer,
    advertisements:advertisementReducer,
    schedules:scheduleReducer,
    scheduleFilter: scheduleFiterReducer,

});
  
  
  