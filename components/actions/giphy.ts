
export const RECEIVE_SEARCH  = 'RECEIVE_SEARCH';
export const LOAD_DATA       = 'LOAD_DATA';
export const ADD_TO_HISTORY  = 'ADD_TO_HISTORY';
export const CLEAR_HISTORY   = 'CLEAR_HISTORY'
export const GET_ONE_IMG     = 'GET_ONE_IMG';
export const FETCHING_DATA   = 'FETCHING_DATA';
export const ERROR_GENERATED = 'ERROR_GENERATED';
export const GIPHY_API_KEY   = '2LPmWBfpviYfErT7yw6ucLC5I4ZRoslI';

function headers() {
  let headers = {
    'Accept':       'application/json',
    'Content-Type': 'application/json'
  };

  return headers;
}

export const loadData: any = () => async (dispatch: any) => {
    try {
        const URL = "http://api.giphy.com/v1/gifs/random?limit=6&api_key=" + GIPHY_API_KEY;
        const res      = await fetch(URL);
        const response = await res.json();
        const result   = await dispatch(receiveData(response));
        return result;
    } catch (err) {
        console.error('Errorloading data: >> ', err.toString());
    }
}

function receiveData(DataArrayProp: any) {
  return {
    type:  LOAD_DATA,
    payload: DataArrayProp
  };
}

export const loadSearch: any = (searchText: string) => async (dispatch: any) => {
    try {
        const URL = `http://api.giphy.com/v1/gifs/search?q=${searchText}&limit=20&api_key=${GIPHY_API_KEY}`;
        const res      = await fetch(URL);
        const response = await res.json();
        const result   = await dispatch(receiveSearch(response));
        return result;
    } catch (err) {
        console.error('Errorloading data: >> ', err.toString());
    }
}

function receiveSearch(SearchArrayProp: any) {
  return {
    type:  RECEIVE_SEARCH,
    payload: SearchArrayProp.data
  };
}


