export const SEND_MESSAGE   = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export interface IAllSearch {
  user: string
  message: string
  timestamp: number
}

interface IReceiveSearch {
  type: typeof RECEIVE_SEARCH
  payload: IAllSearch
}

export type IReceiveSearchTypes = IReceiveSearch;
