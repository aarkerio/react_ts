import { RECEIVE_SEARCH, LOAD_DATA } from '../actions/giphy';

// import { RECEIVE_TESTS } from '../libs/types/giphy-types';

export interface IReduxSearchState {
  SearchArrayProp: any[]
  OneimgObjProp: {}
}

const initialState: IReduxSearchState = {
  SearchArrayProp:    [],
  OneimgObjProp:     {},
};

const giphy_rdcr = (state: IReduxSearchState = initialState, action: any) => {
  switch (action.type) {
      case LOAD_DATA:
          return { ...state, DataArrayProp: action.payload, searchLoaded: true, searchLoadedAt: Date.now() };
      case RECEIVE_SEARCH:
          return { ...state, SearchArrayProp: action.payload, searchLoaded: true, searchLoadedAt: Date.now() };
      default:
          return state;
  }
};

export default giphy_rdcr;
