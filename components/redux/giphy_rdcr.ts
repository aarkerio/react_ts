import { RECEIVE_SEARCH } from '../actions/giphy';

// import { RECEIVE_TESTS } from '../libs/types/giphy-types';

const initialState: object = {
    SearchArrayProp:    [],
    OneimgObjProp:     {},
};

const giphy_rdcr = (state: object = initialState, action: any) => {
  switch (action.type) {
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
           SearchArrayProp: action.SearchArrayProp
      });

    default:
      return state;
  }
};

export default giphy_rdcr;
