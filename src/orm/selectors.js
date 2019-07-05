import { orm } from './model';
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';


export const ormSelector = state => state.orm;


