
export const RECEIVE_SEARCH  = 'RECEIVE_SEARCH';
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

export interface IAllSearch {
  user: string
  message: string
  timestamp: number
}

export const loadData: any = (searchText) => async (dispatch) => {
    try {
        const URL = "http://api.giphy.com/v1/gifs/random";
        let data: RequestInit = {
            method:      'POST',
            credentials: 'same-origin',
            mode:        'same-origin',
            body:        JSON.stringify({
                params: searchText,
                active: true,  // get all
            }),
            headers:     headers()
        }
        const res      = await fetch(URL, data);
        const response = await res.json();
        const result   = await dispatch(receiveSearch(response));
        return result;
    } catch (err) {
        console.error('Error loading data: >> ', err.toString()); 
    }
}

/* Internal method */
function receiveSearch(SearchArrayProp: any) {
  return {
    type:  RECEIVE_SEARCH,
    SearchArrayProp: SearchArrayProp
  };
}
