import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { STYLES } from '../Styles';
import { OwnPhotoModel } from '../Types/models';
import { useAppDispatch } from '../Hooks/redux';
import { ICONS } from '../Assets/Icons/icons';
import { photosActions } from '../Store/reducers/PhotosReducer';
import { Constants } from '../Utilities/Constants';

type photoItemViewProps = {
  model: OwnPhotoModel;
  isFilled: boolean;
};

const PhotoItemView: React.FC<photoItemViewProps> = ({ model, isFilled }) => {
  const dispatch = useAppDispatch();
  const onLikePress = () => {
    dispatch(photosActions.manage_favorites(model));
  };

  const photoUrl = (): string => {
    if (!(model.thumbnail.startsWith('http://') || model.thumbnail.startsWith('https://'))) {
      return `${Constants.API_URL}static/${model.thumbnail}`;
    }
    return model.thumbnail;
  };

  /***
   * Component of single post
   *
   */
  return (
    <View style={[STYLES.MP.mb20]}>
      <View style={[STYLES.Layout.flex_row, STYLES.Layout.jc_sb, STYLES.MP.mb10]} />
      <View style={[STYLES.MP.mb10]}>
        <Text style={[STYLES.Texts.PhotoItemCaption]}>Caption: {model.title}</Text>
      </View>
      <View>
        <Image style={STYLES.Images.photoItemImage} source={{ uri: photoUrl() }} />
      </View>
      <View style={[STYLES.Layout.jc_fe, STYLES.Layout.flex_row, STYLES.MP.mt10, STYLES.MP.mb20]}>
        <TouchableOpacity
          onPress={onLikePress}
          style={[STYLES.Buttons.photoItemLikeButton, STYLES.Layout.flex_row, STYLES.Layout.ai_c, STYLES.MP.mr20]}
        >
          <Image style={[STYLES.Layout.wh100, STYLES.Layout.rm_c]} source={isFilled ? ICONS.heartFilled : ICONS.heartOutline} />
        </TouchableOpacity>
      </View>
      <View style={STYLES.Buttons.horizontalLine} />
    </View>
  );
};

export { PhotoItemView };
