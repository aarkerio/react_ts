import { combineReducers } from 'redux';
import giphy_rdcr     from './giphy_rdcr';
/* Merge reducers  */
const rootReducer = combineReducers({
  giphy_rdcr,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

