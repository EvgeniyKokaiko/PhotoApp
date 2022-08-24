import axios from 'axios';
import { photosActions } from './reducers/PhotosReducer';
import { AppDispatch } from './store';
import { PhotoModel } from '../Types/models';

export class Actions {
  private readonly _apiURL: string;
  constructor(apiURL: string) {
    this._apiURL = apiURL;
  }

  public get apiURL(): string {
    return this._apiURL;
  }

  public fetchPhotos: any = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(photosActions.fetchPhotos());
      const response = await axios.get<PhotoModel[]>(`${this.apiURL}photos?albumId=1`);
      dispatch(photosActions.fetchPhotos_success(response.data));
    } catch (e) {
      const error = e.message.toString() || 'Oops, something went wrong!';
      console.log(error, 'ece');
      dispatch(photosActions.fetchPhotos_error(error));
    }
  };
}

export const actionImpl = new Actions('https://jsonplaceholder.typicode.com/');
