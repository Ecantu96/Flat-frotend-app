import { combineReducers } from 'redux';
import { orm } from '../orm/model';
import { authentication } from './authentication.reducer';
import { createReducer } from 'redux-orm';
import { registration } from './registration.reducer';
import { roommateMatch } from './roommatmatch.reducer';
import { filterProperties } from './filterProperty.reducer';
import { UsersUpdate } from './usersUpdate.reducer';
import { SaveUpdateUserInterests } from './SaveUpdateUserInterests.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    orm: createReducer(orm),
    authentication,
    roommateMatch,
    filterProperties,
    UsersUpdate,
    SaveUpdateUserInterests,
    registration,
    users,
    alert
});

export default rootReducer;