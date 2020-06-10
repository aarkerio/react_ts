
export const RECEIVE_SEARCH  = 'RECEIVE_SEARCH';
export const LOAD_DATA       = 'LOAD_DATA';
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
        const URL = "http://api.giphy.com/v1/gifs/random";
        let data: RequestInit = {
            method:      'POST',
            credentials: 'same-origin',
            mode:        'same-origin',
            body:        JSON.stringify({
                limit:  6,
                active: true,  // get all
                api_key: GIPHY_API_KEY
            }),
            headers:     headers()
        }
        const res      = await fetch(URL, data);
        const response = await res.json();
        const result   = await dispatch(receiveData(response));
        console.log("  ############  RESULT :  >>>> " + JSON.stringify(result));
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
        const URL = "http://api.giphy.com/v1/gifs/trending";
        let data: RequestInit = {
            method:      'POST',
            credentials: 'same-origin',
            mode:        'same-origin',
            body:        JSON.stringify({
                limit:   4,
                searchText: searchText,
                api_key: GIPHY_API_KEY,
                active:  true,  // get all
            }),
            headers:     headers()
        }
        const res      = await fetch(URL, data);
        const response = await res.json();
        const result   = await dispatch(receiveDefault(response));
        return result;
    } catch (err) {
        console.error('Errorloading data: >> ', err.toString());
    }
}

/* Internal method */
function receiveDefault(SearchArrayProp: any) {
  return {
    type:  RECEIVE_SEARCH,
    payload: SearchArrayProp
  };
}


