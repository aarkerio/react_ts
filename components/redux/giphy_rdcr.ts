import { RECEIVE_SEARCH, LOAD_DATA, ADD_TO_HISTORY, CLEAR_HISTORY } from '../actions/giphy';

export interface IReduxSearchState {
    OneimgObjProp: {},
    DataArrayProp: any[],
    SearchArrayProp: any[],
    SearchHistoryProp: any[]
}

const initialState: IReduxSearchState = {
    OneimgObjProp:  {},
    DataArrayProp: [],
    SearchArrayProp: [],
    SearchHistoryProp: []
};

const giphy_rdcr = (state: IReduxSearchState = initialState, action: any) => {
  switch (action.type) {
      case LOAD_DATA:
          return { ...state, DataArrayProp: action.payload, searchLoaded: true, searchLoadedAt: Date.now() };
      case RECEIVE_SEARCH:
          return { ...state, SearchArrayProp: action.payload, searchLoaded: true, searchLoadedAt: Date.now() };
      case ADD_TO_HISTORY:
          return { ...state, SearchHistoryProp: action.payload, searchLoaded: true };
      default:
          return state;
  }
};

export default giphy_rdcr;
