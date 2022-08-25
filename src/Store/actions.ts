import axios from 'axios';
import { photosActions } from './reducers/PhotosReducer';
import { AppDispatch } from './store';
import { OwnPhotoModel, TypedResponse } from '../Types/models';
import { Constants } from '../Utilities/Constants';

/**
 *
 * Singleton class realization of asynchronous action creators
 */
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
      const response = await axios.get<TypedResponse<OwnPhotoModel[]>>(`${this.apiURL}posts/get`);
      dispatch(photosActions.fetchPhotos_success(response.data.data));
    } catch (e) {
      const error = e.message.toString() || 'Oops, something went wrong!';
      dispatch(photosActions.fetchPhotos_error(error));
    }
  };
}

// 'https://jsonplaceholder.typicode.com/' - default api
export const actionImpl = new Actions(Constants.API_URL);
