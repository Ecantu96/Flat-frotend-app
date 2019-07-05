// import { combineReducers } from 'redux';
// import { orm } from '../orm/model';
// import { createReducer } from 'redux-orm';
// import { appReducer as app } from './appReducer';

// //import { manageRecipientsReducerCreator } from './manageRecipients';

// export default combineReducers({
//     orm: createReducer(orm),
//     app

// })




import { combineReducers } from 'redux';
import { orm } from '../orm/model';
import { authentication } from './authentication.reducer';
import { createReducer } from 'redux-orm';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    orm: createReducer(orm),
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;