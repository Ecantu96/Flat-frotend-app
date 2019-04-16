import { combineReducers } from 'redux';
import { orm } from '../orm/model';
import { createReducer } from 'redux-orm';
import { appReducer as app} from './appReducer';

//import { manageRecipientsReducerCreator } from './manageRecipients';

export default combineReducers({
    orm: createReducer(orm),
    app
   
})