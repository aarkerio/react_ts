import { RECEIVE_SEARCH } from '../actions/giphy';

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
      case RECEIVE_SEARCH:
          return { ...state, SearchArrayProp: action.SearchArrayProp, searchLoaded: true, searchLoadedAt: Date.now() };
      default:
          return state;
  }
};

export default giphy_rdcr;
