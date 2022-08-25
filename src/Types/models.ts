export interface PhotoModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type TypedResponse<T> = {
  statusCode: number;
  statusMessage: string;
  data?: T;
};

export interface OwnPhotoModel {
  id: number;
  title: string;
  album_id: number;
  url: string;
  thumbnail: string;
  created_at: string | null;
  updated_at: string | null;
}
